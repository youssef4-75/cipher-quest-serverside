
import { verifyTokenMiddleware } from "../security/middleware.js";
import { highlightPassword } from "../connection/game_play.js";

export function highlightEndPoint(app) {
    app.post("/highlight", verifyTokenMiddleware, async (req, res) => {
        try {
            const { attempt, gameId, token } = req.body;
            console.log(`[POST /highlight] Highlighting password for game ${gameId}`);
            
            const result = await highlightPassword(attempt, gameId, token);
            console.log(`[POST /highlight] Successfully highlighted password`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /highlight] Failed to highlight password:', error.message);
            res.status(401).json({ message: 'Unable to process highlight request. Please try again later.' });
        }
    });
}
