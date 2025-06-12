/**
 * Authentication and user management module
 * Handles user registration, login, and energy recovery functionality
 */

import { loginUser, registerUser } from "../logic/authenticate.js";
import { getUser } from "../logic/users.js";
import { updateUserDB } from "../database/player_data.js";

/**
 * Registers a new user in the system
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @param {string} name - User's display name
 * @returns {Promise} - Registration result from the authentication system
 */
export async function registerUserC(email, password, name) {
    // in real app, these data will be sent to the server and the server will return a response
    return await registerUser(email, password, name);
}

/**
 * Authenticates a user and logs them in
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise} - Login result from the authentication system
 */
export async function loginUserC(email, password) {
    // in real app, these data will be sent to the server and the server will return a response
    return await loginUser(email, password);
}

/**
 * Recovers user's energy points over time
 * @param {string} key - User's authentication key
 * @returns {Promise<void>}
 */
export async function energyRecovery(key) {
    // TODO: check if really 30 second are passed from the last recovery
    const user = await getUser(key);
    if (user.energy < 100) {
        user.energy += 1;
    }
    updateUserDB(key, user);
}
