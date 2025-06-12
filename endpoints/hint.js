
import { verifyTokenMiddleware } from "../security/middleware.js";
import { generateHint } from "../connection/game_play.js";

export function getHintEndPoint(app) {
    app.post("/hint", verifyTokenMiddleware, async (req, res) => {
        try {
            const { gameId, token, hintText } = req.body;
            console.log(`[POST /hint] Generating hint - GameID: ${gameId}, Hint: ${hintText}`);
            
            const result = await generateHint(gameId, token, hintText);
            console.log(`[POST /hint] Successfully generated hint`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /hint] Failed to generate hint:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
