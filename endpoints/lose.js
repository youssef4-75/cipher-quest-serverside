
import { verifyTokenMiddleware } from "../security/middleware.js";
import { notifyLoss } from "../connection/game_play.js";

export function losingEndPoint(app) {
    app.post("/lose", verifyTokenMiddleware, async (req, res) => {
        try {
            const { gameId, token } = req.body;
            console.log(`[POST /lose] Processing game loss - GameID: ${gameId}`);
            
            await notifyLoss(gameId, token);
            console.log(`[POST /lose] Successfully processed game loss`);
            
            res.json({
                success: true,
                data: {}
            });
        }
        catch (error) {
            console.error('[POST /lose] Failed to process game loss:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
