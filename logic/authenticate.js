import { addUserDB, getUserDB, userGenerator } from "../database/player_data.js";
import {generateKey} from "../security/authentication.js"
export async function registerUser(email, passwd, name) {
    const key = generateKey(email, passwd); // normally generated in the server side via JWT, to be implemented later
    const user = await getUserDB(key);
    if (user) {
        throw "User already exists";
    }
    const a = {
        name: name,
        auth_mail: email,
        password: passwd,
        energy: 100,
        collectedPwd: [],
        themes: {},
        winStreak: 0,
        level: 1,
        points: 100,
        totalAttempts: 0,
        memberSince: Date(),
        totalGamePlayed: 0,
        accomplishedMission: 0,
        wellAttempts: 0,
        succesRate: 0, // the number of correct submission over the 
        // total number of submission
        longestStreak: 0, // successive mission accomplished
        phaseSolved: 0,
        currentGame: {
            gameId: null,
            phase: null,
            attempt: null,
            startTime: null,
            entryTimes: null,
        }
    };
    addUserDB(key, a);
    return key;
}
export async function loginUser(email, password) {
    const userGen = userGenerator();
    for await (const [key, user] of userGen) {
        if (user.auth_mail === email
            &&
                user.password === password) {
            return {
                id: key, email,
                name: user.name,
                energy: user.energy,
                points: user.points,
                solvedPasswords: user.collectedPwd
            };
        }
    }
    throw ("Login credentials are not matching, find out your"
        + " password first before guessing others password");
}
