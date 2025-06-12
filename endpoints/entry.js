
import { verifyTokenMiddleware } from "../security/middleware.js";
import { notifyEntry } from "../connection/dashboard.js";
export function gamePlayEntryEndPoint(app) {
    app.post("/entry", verifyTokenMiddleware, async (req, res) => {
        try {
            const { token, gameId } = req.body;
            console.log(`got a request from user : ${token} to enter the game ${gameId}`)
            await notifyEntry(gameId, token);
            res.json({
                success: true,
                data: {}
            });
        }
        catch (error) {
            console.error('Error verifying token:', error);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
