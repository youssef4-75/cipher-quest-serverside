
import { verifyTokenMiddleware } from "../security/middleware.js";
import { getProfile } from "../connection/profile.js";

export function getMyProfileEndPoint(app) {
    app.post("/my_profile", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token } = req.body;
            console.log(`[POST /my_profile] Fetching user profile`);
            
            const result = await getProfile(token);
            console.log(`[POST /my_profile] Successfully retrieved user profile`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[POST /my_profile] Failed to fetch user profile:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
