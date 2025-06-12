/**
 * Dashboard module for game management
 * Handles game availability and entry functionality
 */

import { getGame, getGamesList } from "../logic/get_game.js";
import { getUser } from "../logic/users.js";
import { updateUserDB } from "../database/player_data.js";

/**
 * Retrieves the list of available games for a user
 * @param {string} key - User's authentication key
 * @returns {Promise<Array>} - List of available games
 */
export function getAvailableGames(key) {
    // get the variable from the database
    return getGamesList(key);
}

/**
 * Handles user entry into a game
 * @param {string} gameId - ID of the game to enter
 * @param {string} key - User's authentication key
 * @throws {Error} - If user is already in another game
 * @returns {Promise<null>} - Returns null if user doesn't have enough energy
 */
export async function notifyEntry(gameId, key) {
    //in reality, this is a more complexe function that try to connect to the server and send it some data
    const game = await getGame(gameId);
    const user = await getUser(key);
    
    // Check if user is already in a game
    console.log({...user, gid: user.currentGame.gameId, inotherG: ![null, gameId].includes(user.currentGame.gameId)})
    if (![null, gameId].includes(user.currentGame.gameId)) {
        throw "This player is already in another game";
    }

    // Track number of times user has entered this game
    if (user.currentGame.entryTimes === null) {
        user.currentGame.entryTimes = 1;
    } else {
        user.currentGame.entryTimes += 1;
    }

    // Check if user has enough energy
    const energyCost = game.energyCost;
    const energy = user.energy;
    if (energy < energyCost) {
        return null;
    }

    // Initialize game state for user
    user.currentGame.gameId = gameId;
    user.currentGame.phase = 0;
    user.currentGame.attempt = 0;
    user.currentGame.startTime = Date.now();
    user.energy -= energyCost;
    updateUserDB(key, user);
}
