import { getInv, sendUseDemand } from "../connection/store.js";
import { verifyTokenMiddleware } from "../security/middleware.js";


export function getInvEndPoint(app) {
    app.get("/inventory", async (req, res) => {
        try {
            
            console.log(`[GET /inventory] Fetching the inventory`);
            
            const result = await getInv();
            console.log(`[GET /inventory] Successfully retrieved inventory`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[GET /inventory] Failed to fetch inventory:', error.message);
            res.status(401).json({ message: 'couldn\'t get inventory' });
        }
    });
}


export function useItemEndPoint(app) {
    app.put("/inventory", verifyTokenMiddleware, async (req, res) => {
        try {
            const { item_to_use, token } = req.body;
            console.log(`[PUT /inventory] Using item - Item: ${item_to_use}`);
            
            const result = await sendUseDemand(item_to_use, token);
            console.log(`[PUT /inventory] Successfully used item`);
            
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            console.error('[PUT /inventory] Failed to use item:', error.message);
            res.status(401).json({ message: 'Unable to use item. Please try again later.' });
        }
    });
}