import { getInv } from "../connection/store.js";
import { getCorr } from "../database/user_invent_data.js";

export const getInventory = async (key) => {
    const inventory = [];
    const corr = await getCorr(key);
    const inv = await getInv()
    for (const { itemIndex, amount } of corr) {
        inventory.push({...inv[itemIndex], quantity: amount});
        
    }
    return inventory;
};
