import { getUsersDB, getUserDB } from "../database/player_data.js";
export async function getUser(key) {
    const user = await getUserDB(key)
    if (user) {
        const { password, ...rest } = user;
        return rest;
    }
    return {
        name: "Visitor",
        auth_mail: "nothing@gmail.com",
        password: "__",
        winStreak: 0,
        level: 1,
        themes: {},
        energy: 0,
        points: 0,
        collectedPwd: [],
        memberSince: "01-01-2020",
        totalGamePlayed: 0,
        accomplishedMission: 0,
        wellAttempts: 0, // the number of correct submission over the 
        // total number of submission
        totalAttempts: 0,
        longestStreak: 0, // successive mission accomplished
        succesRate: 0,
        phaseSolved: 0,
        currentGame: {
            gameId: null,
            phase: null,
            attempt: null,
            startTime: null,
            entryTimes: null,
        },
    };
}
export function UsersList() {
    return Object.values(getUsersDB()).map((element, index) => {
        const { password, collectedPwd, auth_mail, currentGame, ...rest } = element;
        return rest;
    });
}
;
