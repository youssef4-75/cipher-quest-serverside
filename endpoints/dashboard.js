import { getGamesList } from "../logic/get_game.js";
import { verifyTokenMiddleware } from "../security/middleware.js";

/**
 * Dashboard endpoint handler for retrieving available games
 * @param {Object} app - Express application instance
 */
export function dashboardGamesEndPoint(app) {
    app.post("/dashboard", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token } = req.body;
            
            // Validate request body
            if (!token) {
                return res.status(400).json({
                    success: false,
                    error: {
                        code: 'MISSING_TOKEN',
                        message: 'Authentication token is required',
                        details: 'Please provide a valid authentication token'
                    }
                });
            }

            console.log(`[POST /dashboard] Fetching games list for user`);
            
            const result = await getGamesList(token);
            console.log(`[POST /dashboard] Successfully retrieved ${result.length} games`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /dashboard] Failed to fetch games:', error.message);
            res.status(401).json({ message: 'Couldnt ' });
        }
    });
}
