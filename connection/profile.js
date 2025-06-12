/**
 * User profile management module
 * Handles user profile data, achievements, inventory, and statistics
 */

import { getAchievements } from "../logic/getAchievements.js";
import { getInventory } from "../logic/getInventory.js";
import { getUser } from "../logic/users.js";


/**
 * Gets user's energy and points
 * @param {string} key - User's authentication key
 * @returns {Promise<Object>} - User's energy and points
 */
export async function getPower(key) {
    const user = await getUser(key);
    if (!user) {
        return { energy: 0, points: 0 };
    }
    return { energy: user?.energy, points: user?.points };
}

/**
 * Gets complete user profile information
 * @param {string} key - User's authentication key
 * @returns {Promise<Object>} - Complete user profile data including:
 *   - solvedPasswords: Array of solved passwords
 *   - name: User's display name
 *   - email: User's email
 *   - level: User's level
 *   - points: User's points
 *   - energy: User's energy
 *   - achievements: User's achievements
 *   - inventory: User's inventory
 *   - stats: User's game statistics
 */
export async function getProfile(key) {
    // return {solvedPasswords, name, email, points, energy, achievements, inventory, stats}
    const user = await getUser(key);
    const achievements = getAchievements(key);
    const inventory = await getInventory(key);
    const stats = {
        inGameAge: ((Date.now() -
            new Date(user.memberSince).getTime())
            / (1000 * 60 * 60 * 24 * 365)).toFixed(2),
        // return the number of years in the game with dots
        gamesPlayed: user.totalGamePlayed,
        gamesWon: user.accomplishedMission,
        successRate: `${user.wellAttempts / (user.totalAttempts || 1)}%`,
        longestStreak: user.longestStreak,
        totalPhasesSolved: user.phaseSolved,
        Theme: Object.keys(user.themes).sort((a, b) => user.themes[b] - user.themes[a])[0] || 'No theme'
    };
    const solvedPasswords = user.collectedPwd;
    const { name, auth_mail: email, level, points, energy } = user;
    return { solvedPasswords, name, email, level, points, energy, achievements, inventory, stats };
}
