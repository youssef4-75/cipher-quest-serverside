
import { getLeaderboard, getOwnRank } from "../connection/leaderboard.js";
import { verifyTokenMiddleware } from "../security/middleware.js";

export function getLBoardEndPoint(app) {
    app.get("/leaderboard", async (req, res) => {
        try {
            console.log({query: req.query})
            const { filter } = req.query;
            console.log(`[GET /leaderboard] Fetching leaderboard - Filter: ${filter}`);
            
            const result = await getLeaderboard(filter);
            console.log(`[GET /leaderboard] Successfully retrieved leaderboard`, result);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[GET /leaderboard] Failed to fetch leaderboard:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}

export function getMyRankEndPoint(app) {
    app.post("/leaderboard", verifyTokenMiddleware, async (req, res) => {
        try {
            const { filter, token } = req.body;
            console.log(`[POST /leaderboard] Fetching user rank - Filter: ${filter}`);
            
            const result = await getOwnRank(filter, token);
            console.log(`[POST /leaderboard] Successfully retrieved user rank`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /leaderboard] Failed to fetch user rank:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
