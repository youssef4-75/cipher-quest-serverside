import { getAchievements as getAchievements_ } from "../database/achievements.js";
import { correspondingAchievements } from "../database/user_achiev_data.js";
export const getAchievements = (key) => {
    const achievement = [];
    for (const [userKey, achievIndex] of correspondingAchievements) {
        if (userKey === key) {
            let { validator, ...achiev } = getAchievements_()[achievIndex - 1];
            achievement.push(achiev);
        }
    }
    return achievement;
};
