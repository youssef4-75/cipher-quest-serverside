const achievements = [
    {
        id: 1,
        name: "First Steps",
        description: "Complete your first game",
        validator: (user, game) => user.accomplishedMission > 0
    },
    {
        id: 2,
        name: "Apprentice Decoder",
        description: "Solve 5 puzzles",
        validator: (user, game) => user.accomplishedMission > 5
    },
    {
        id: 3,
        name: "Code Cracker",
        description: "Complete a Hard difficulty game",
        validator: (user, game) => game.difficulty === 'Hard'
    },
    {
        id: 4,
        name: "Perfect Run",
        description: "Complete a game without any failed attempts",
        validator: (user, game) => user.currentGame[2] === 0
    },
    {
        id: 5,
        name: "Cipher Master",
        description: "Solve 50 puzzles",
        validator: (user, game) => user.accomplishedMission >= 50
    },
    {
        id: 6,
        name: "Daily Challenge",
        description: "Complete the daily challenge",
        validator: (user, game) => true
    },
];
export const getAchievements = () => {
    return achievements;
};
