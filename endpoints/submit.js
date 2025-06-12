import { submitAnswer } from "../connection/game_play.js";
import { verifyTokenMiddleware } from "../security/middleware.js";

/**
 * Submit answer endpoint handler
 * @param {Object} app - Express application instance
 */
export function submitAnswerEndPoint(app) {
    app.put("/submit", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token, passwordTentative, hintText } = req.body;
            console.log(`[PUT /submit] Submission attempt - Password: ${passwordTentative}`);
            
            const result = await submitAnswer(token, passwordTentative, hintText);
            console.log(`[PUT /submit] Successfully submitted answer`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[PUT /submit] Failed to submit answer:', error.message);
            res.status(401).json({ message: 'Unable to process your submission. Please try again later.' });
        }
    });
}
