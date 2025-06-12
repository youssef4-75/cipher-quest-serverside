// a page to simulate the data of a player and the getting and setting operations
const users = {
    user_lt2qh99: {
        name: "user0",
        auth_mail: "you@gmail.com",
        password: "2",
        winStreak: 0,
        level: 1,
        themes: {},
        energy: 100,
        points: 310000000,
        collectedPwd: [],
        item_in_use: null,
        memberSince: "03-05-2025",
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
    },
    default: {
        name: "Visitor",
        auth_mail: "nothing@gmail.com",
        password: "__",
        winStreak: 0,
        level: 1,
        themes: {},
        energy: 100,
        points: 10,
        collectedPwd: [],
        item_in_use: null,
        memberSince: "03-05-2025",
        totalGamePlayed: 2,
        accomplishedMission: 1,
        wellAttempts: 4, // the number of correct submission over the 
        // total number of submission
        totalAttempts: 8,
        longestStreak: 1, // successive mission accomplished
        succesRate: 20,
        phaseSolved: 4,
        currentGame: {
            gameId: null,
            phase: null,
            attempt: null,
            startTime: null,
            entryTimes: null,
        },
    },
    user_1: {
        name: "user1",
        auth_mail: "you@gmail.com",
        password: "2",
        winStreak: 0,
        themes: {},
        level: 1,
        energy: 100,
        points: 10,
        collectedPwd: [],
        item_in_use: null,
        memberSince: "03-05-2025",
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
    },
    user_2: {
        name: "user2",
        auth_mail: "you@gmail.com",
        password: "2",
        winStreak: 0,
        themes: {},
        level: 1,
        energy: 100,
        points: 10,
        collectedPwd: [],
        item_in_use: null,
        memberSince: "03-05-2025",
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
    },
    user_3: {
        name: "user3",
        auth_mail: "you@gmail.com",
        password: "2",
        winStreak: 0,
        themes: {},
        level: 1,
        energy: 100,
        points: 10,
        collectedPwd: [],
        item_in_use: null,
        memberSince: "03-05-2025",
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
    }
};
export const getUsersDB = () => {
    return users;
};
export const getUserDB = async (key)=>{
    if(users.hasOwnProperty(key)) return users[key];
    return null;
}
export const updateUsersDB = (_users) => {
    if (!_users || typeof _users !== 'object') return;
    Object.assign(users, _users);
};
export const updateUserDB = (key, user) => {
    const users = getUsersDB();
    const { password, ...rest } = users[key];
    const newUser = {
        ...user,
        password
    };
    users[key] = newUser;
    updateUsersDB(users);
};
export const addUserDB = (key, user) => {
    const users = getUsersDB();
    users[key] = user;
    updateUsersDB(users);
};

export async function* userGenerator() {
    const users = getUsersDB();
    for (const [key, user] of Object.entries(users)) {
        yield [key, user];
    }
}
