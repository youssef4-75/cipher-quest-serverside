
import { verifyTokenMiddleware } from "../security/middleware.js";
import { getGames } from "../connection/game_play.js";

export function getGamesEndPoint(app) {
    app.post("/games", verifyTokenMiddleware, async (req, res) => {
        try {
            const { gameId, token } = req.body;
            console.log(`[POST /games] Fetching game details - GameID: ${gameId}`);
            const result = await getGames(gameId, token);
            console.log(`[POST /games] Successfully retrieved game details`);
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /games] Failed to fetch game details:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
