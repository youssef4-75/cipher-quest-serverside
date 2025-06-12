import { getPower } from "../connection/profile.js";
import { verifyTokenMiddleware } from "../security/middleware.js";

export function getPowerEndPoint(app) {
    app.post("/profile", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token } = req.body;
            console.log(`[POST /profile] Fetching user power`);
            
            const result = await getPower(token);
            console.log(`[POST /profile] Successfully retrieved user power {points: ${result.points}, energy: ${result.energy}} `);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /profile] Failed to fetch user power:', error.message);
            res.status(401).json({ message: 'Unable to retrieve power data. Please try again later.' });
        }
    });
}
