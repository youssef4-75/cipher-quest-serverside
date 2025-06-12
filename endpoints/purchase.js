import { buy } from "../connection/store.js";
import { verifyTokenMiddleware } from "../security/middleware.js";

export function PurchaseEndPoint(app) {
    app.put("/purchase", verifyTokenMiddleware, async (req, res) => {
        try {
            const { item_to_buy, token } = req.body;
            console.log(`[PUT /purchase] Buying item from the store item: ${item_to_buy}`);
            const result = await buy(item_to_buy, token);
            console.log(`[PUT /purchase] Successfully purchased item?: ${result} `);
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[PUT /purchase] Failed to fetch game details:', error.message);
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    });
}
