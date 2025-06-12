import { energyRecovery } from "../connection/app.js";
import { verifyTokenMiddleware } from "../security/middleware.js";
// TODO find the correct syntax in typescript
export function recoveringEndPoint(app) {
    app.post("/recovery", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token } = req.body;
            console.log(`[POST /recovery] Initiating energy recovery`);
            
            energyRecovery(token);
            console.log(`[POST /recovery] Successfully initiated energy recovery`);
            
            res.json({
                success: true,
                data: {}
            });
        }
        catch (error) {
            console.error('[POST /recovery] Failed to initiate energy recovery:', error.message);
            res.status(401).json({ message: 'Unable to start energy recovery. Please try again later.' });
        }
    });
}
