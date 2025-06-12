/**
 * Game play module
 * Handles core game mechanics including password validation, hints, rewards, and game state management
 */

import { getGame, validGameId } from "../logic/get_game.js";
import { getUser } from "../logic/users.js";
import { updateUserDB } from "../database/player_data.js";

const HINT_COST = 5;

/**
 * Calculates similarity between input password and correct password
 * @param {string} inputPassword - User's input password
 * @param {string} correctPassword - Correct password for comparison
 * @returns {number} - Similarity score (0-100)
 */
const calculateSimilarity = (inputPassword, correctPassword) => {
    // Convert both strings to lowercase for case-insensitive comparison
    const inputLower = inputPassword.toLowerCase();
    const correctLower = correctPassword.toLowerCase();
    
    // Initialize score components
    let positionScore = 0;
    let characterScore = 0;
    let lengthScore = 0;
    
    // Calculate length similarity (0-30 points)
    const maxLength = Math.max(inputLower.length, correctLower.length);
    const minLength = Math.min(inputLower.length, correctLower.length);
    lengthScore = (minLength / maxLength) * 30;
    
    // Calculate character position matches (0-40 points)
    for (let i = 0; i < minLength; i++) {
        if (inputLower[i] === correctLower[i]) {
            positionScore += 40 / maxLength;
        }
    }
    
    // Calculate character presence matches (0-30 points)
    const inputChars = new Set(inputLower);
    const correctChars = new Set(correctLower);
    const commonChars = new Set([...inputChars].filter(x => correctChars.has(x)));
    characterScore = (commonChars.size / Math.max(inputChars.size, correctChars.size)) * 30;
    
    // Calculate total score
    const totalScore = Math.round(positionScore + characterScore + lengthScore);
    
    // Ensure score is between 0 and 100
    return Math.min(100, Math.max(0, totalScore));
};

/**
 * Generates a hint for the password
 * @param {string} realPassword - The correct password
 * @param {string} currentHint - Current hint state
 * @returns {string} - Updated hint with one more character revealed
 */
function hinting(realPassword, currentHint) {
    if (currentHint == realPassword) {
        return currentHint;
    }
    
    // Select random position for hint
    let hintIndex = Math.floor(Math.random() * realPassword.length);
    while (currentHint && currentHint[hintIndex] !== "*") {
        hintIndex = Math.floor(Math.random() * realPassword.length);
    }
    
    // Generate new hint
    let hint = "";
    for (let loopIndex = 0; loopIndex < realPassword.length; loopIndex++) {
        if (loopIndex === hintIndex) {
            hint += realPassword[hintIndex];
        } else {
            hint += currentHint !== null ? currentHint[loopIndex] : "*";
        }
    }
    return hint;
}
 
/**
 * Calculates reward points based on game difficulty and attempts
 * @param {string} difficulty - Game difficulty level
 * @param {number} entryTimes - Number of times user has entered the game
 * @param {boolean} preDone - Whether user has completed this password before
 * @returns {number} - Calculated reward points
 */
function reward(difficulty, entryTimes, preDone) {
    const addon = difficulty === "Easy" && preDone ? 5 :
        difficulty === "Medium" && preDone ? 10 :
            difficulty === "Hard" && preDone ? 20 :
                preDone ? 25 :
                    difficulty === "Easy" ? 20 :
                        difficulty === "Medium" ? 40 :
                            difficulty === "Hard" ? 80 :
                                160;
    const div = Math.pow(2, (entryTimes || 1) - 1);
    return addon / div;
}

/**
 * Handles game win conditions and updates user stats
 * @param {string} gameId - ID of the completed game
 * @param {string} key - User's authentication key
 */
async function WinGame(gameId, key) {
    const user = await getUser(key);
    const game = await getGame(gameId);
    if (!user) {
        return;
    }
    
    // Update user statistics
    user.wellAttempts = game.length;
    user.themes[game.theme] = (user.themes[game.theme] || 0) + 1;
    user.accomplishedMission += 1;
    user.winStreak += 1;
    
    // Update longest streak if needed
    if (user.winStreak > user.longestStreak) {
        user.longestStreak = user.winStreak;
    }
    
    // Reset game state
    user.totalAttempts += user.currentGame.attempt || 0 + game.length;
    user.currentGame.gameId = null;
    user.currentGame.phase = null;
    user.currentGame.attempt = null;
    user.currentGame.startTime = null;
    user.currentGame.entryTimes = null;
    
    // Calculate and award points
    if (user.collectedPwd.includes(game.finalPassword)) {
        user.points += reward(game.difficulty, user.currentGame.entryTimes || 0, true);
        updateUserDB(key, user);
        return;
    }
    
    user.collectedPwd.push(game.finalPassword);
    user.points += reward(game.difficulty, user.currentGame.entryTimes || 0, false);
    user.totalGamePlayed += 1;
    updateUserDB(key, user);
}

/**
 * Handles game loss conditions and updates user stats
 * @param {string} gameId - ID of the lost game
 * @param {string} key - User's authentication key
 */
async function LoseGame(gameId, key) {
    const user = await getUser(key);
    const game = await getGame(gameId);
    
    // Update user statistics
    user.winStreak = 0;
    user.totalGamePlayed += 1;
    user.wellAttempts +=( user.currentGame.phase || 0);
    user.totalAttempts += game.maxAttempts + (user.currentGame.phase || 0);
    
    // Reset game state
    user.currentGame.gameId = null;
    user.currentGame.phase = null;
    user.currentGame.attempt = null;
    user.currentGame.startTime = null;
    user.currentGame.entryTimes = null;
    updateUserDB(key, user);
}

/**
 * Gets current game information
 * @param {string} gameId - ID of the game
 * @param {string} key - User's authentication key
 * @returns {Promise<Object|null>} - Game information or null if invalid
 */
export async function getGames(gameId, key) {
    const user = await getUser(key);
    if (user.currentGame.gameId != gameId) {
        return null;
    }
    
    const phaseIndex = user.currentGame.phase || 0;
    if (validGameId(gameId)) {
        const { length, title, description, energyCost, maxAttempts, difficulty, detailedDescription, phases, timeLimit, timed } = await getGame(gameId);
        if (phaseIndex >= length) {
            return null;
        }
        const { password, ...phase } = phases[(phaseIndex)];
        return {
            phase,
            length,
            timeLimit,
            timed,
            title,
            description,
            energyCost,
            maxAttempts,
            difficulty,
            detailedDescription
        };
    }
    return null;
}

/**
 * Generates a hint for the current game phase
 * @param {string} gameId - ID of the game
 * @param {string} key - User's authentication key
 * @param {string} hintText - Current hint state
 * @returns {Promise<string|null>} - New hint or null if user can't afford it
 */
export async function generateHint(gameId, key, hintText) {
    const user = await getUser(key);
    const phase = user.currentGame.phase || 0;
    if (validGameId(gameId)) {
        if (user.points < HINT_COST) {
            return null;
        }
        const { phases } = await getGame(gameId);
        const { password: correctPassword, ..._ } = phases[phase];
        const hint = hinting(correctPassword, hintText);
        hintText = hint;
        user.points -= HINT_COST;
        updateUserDB(key, user);
        return hintText;
    }
    return null;
}

/**
 * Notifies the system of a game loss
 * @param {string} gameId - ID of the game
 * @param {string} key - User's authentication key
 */
export async function notifyLoss(gameId, key) {
    const user = await getUser(key);
    const game = await getGame(gameId);
    user.currentGame.attempt = game.maxAttempts;
    updateUserDB(key, user);
    LoseGame(gameId, key);
}

/**
 * Submits a password attempt for the current game phase
 * @param {string} key - User's authentication key
 * @param {string} passwordTentative - User's password attempt
 * @param {string} hintText - Current hint state
 * @returns {Promise<Object>} - Result of the attempt including state and similarity
 */
export async function submitAnswer(key, passwordTentative, hintText) {
    const user = await getUser(key);

    const gameId = user.currentGame.gameId;
    if (!gameId) {
        return {
            state: '',
            res: {
                finalPassword: '',
                sim: '0'
            }
        };
    }

    const phaseIndex = user.currentGame.phase || 0;

    if (validGameId(gameId)) {
        const game = await getGame(gameId);

        if ((user.currentGame.attempt || 0) >= game.maxAttempts ||
            (user.currentGame.startTime || 0) + 1000 * game.timeLimit < Date.now()) {
            return { state: 'useless', res: { finalPassword: null, sim: 0 } };
        }

        const currentPhaseData = game.phases[phaseIndex];
        const correctPassword = currentPhaseData.password;

        if (passwordTentative.toLowerCase() === correctPassword.toLowerCase()) {
            
            user.currentGame.phase = (user.currentGame.phase || 0) + 1;
            user.phaseSolved += 1;
            user.currentGame.startTime = Date.now();
            updateUserDB(key, user);
            
            if (user.currentGame.phase === game.length) {
                WinGame(gameId, key);
                return { state: 'win', res: { finalPassword: game.finalPassword, sim: 100 } };
            } else {
                return { state: 'next', res: { finalPassword: null, sim: 100 } };
            }
        } else {
            if (user.currentGame.attempt) {
                user.currentGame.attempt += 1;
            }else {
                user.currentGame.attempt = 1;
            }
            
            const similarity = calculateSimilarity(passwordTentative, correctPassword);

            updateUserDB(key, user);
            
            if ((user.currentGame.attempt || 0) >= game.maxAttempts) {
                LoseGame(gameId, key);
                return { state: 'lost', res: { finalPassword: null, sim: 0 } };
            } else {
                const finalPassword = hinting(correctPassword, hintText);
                return { state: 'false', res: { finalPassword, sim: similarity } };
            }
        }
    }
    return {
        state: '',
        res: {
            finalPassword: '',
            sim: '0'
        }
    };
}

/**
 * Highlights correct characters in password attempts
 * @param {string} attempt - User's password attempt
 * @param {string} gameId - ID of the game
 * @param {string} key - User's authentication key
 * @returns {Promise<Array|null>} - Array of highlighted characters or null if invalid
 */
export const highlightPassword = async (attempt, gameId, key) => {
    const user = await getUser(key);
    if(user.currentGame.gameId != gameId){
         return [];
    }
    const attemptIndex = user.currentGame.attempt;
    const game = await getGame(gameId);
    const correctPassword = game.phases[user.currentGame.phase || 0].password;
    const maxAttempts = game.maxAttempts;
    
    if (attempt.length == 0) {
        return [];
    }
    
    let corr_color = '';
    let fals_color = '';
    if ((attemptIndex || 0) + 2 >= maxAttempts) {
        corr_color = 'green';
        fals_color = 'red';
    }
    
    const result = [];
    const attemptLower = attempt.toLowerCase();
    const correctLower = correctPassword.toLowerCase();
    
    for (let i = 0; i < attemptLower.length; i++) {
        const char = attemptLower[i];
        if (i < correctLower.length && char === correctLower[i]) {
            // Character is in correct position
            result.push({
                key: i,
                color: corr_color,
                letter: attempt[i]
            });
        } else {
            // Character is incorrect or in wrong position
            result.push({
                key: i,
                color: fals_color,
                letter: attempt[i]
            });
        }
    }
    return result;
};
