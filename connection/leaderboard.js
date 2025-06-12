/**
 * Leaderboard module for player rankings and statistics
 * Handles sorting and retrieval of player rankings
 */

import { UsersList, getUser } from "../logic/users.js";

/**
 * Internal function to generate and sort the leaderboard
 * @param {string} filter - Sorting criteria ('points' or 'solved')
 * @returns {Array} - Sorted array of player data
 */
function gLboard(filter) {
    // to get the leaderboard [first ten player and your own order]
    const leaderboard = UsersList().map((element, index) => {
        return {
            id: index,
            name: element.name,
            points: element.points,
            solved: element.accomplishedMission,
        };
    });
    
    // Sort based on filter criteria
    if (filter === 'points') {
        return leaderboard.sort((a, b) => b.points - a.points);
    } else {
        return leaderboard.sort((a, b) => b.solved - a.solved);
    }
}

/**
 * Gets the top 10 players from the leaderboard
 * @param {string} filter - Sorting criteria ('points' or 'solved')
 * @returns {Array} - Top 10 players sorted by the specified criteria
 */
export async function getLeaderboard(filter) {
    return gLboard(filter).slice(0, 10);
}

/**
 * Gets the rank and stats of a specific player
 * @param {string} filter - Sorting criteria ('points' or 'solved')
 * @param {string} key - User's authentication key
 * @returns {Object} - Player's rank and statistics
 */
export async function getOwnRank(filter, key) {
    const user = await getUser(key);
    const leaderboard = gLboard(filter);
    const ownRank = leaderboard.findIndex(player => player.name === user?.name);
    
    // Return default values if user not found
    if (ownRank === -1) {
        return { rank: 103, points: -20, solved: 1 };
    }
    
    return { 
        rank: ownRank + 1, 
        points: user?.points, 
        solved: user?.accomplishedMission
    };
}
