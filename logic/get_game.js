import { getGamesDB } from "../database/games_data.js";
import { getUser } from "./users.js";
export async function getGamesList(key) {
    const user = await getUser(key);
    return Object.entries(getGamesDB()).map(([id, game], _) => {
        return {
            id: id,
            title: game.title,
            description: game.description,
            image: game.image,
            timeLimit: game.timeLimit,
            timed: game.timed,
            energyCost: game.energyCost,
            maxAttempts: game.maxAttempts,
            phases: game.length,
            difficulty: game.difficulty,
            preDone: user.collectedPwd.includes(game.finalPassword),
            theme: game.theme,
            isDaily: game.isDaily,
            playable: [null, id].includes(user.currentGame.gameId),
        };
    });
}
export async function getGame(gameId) {
    const res = await getGamesDB()[gameId];
    return res;
}
export function validGameId(gameId) {
    return gameId && (gameId in getGamesDB());
}
