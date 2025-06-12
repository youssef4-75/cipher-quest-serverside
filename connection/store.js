import { getInventory } from "../database/inventory_data.js"
import { updateUserDB } from "../database/player_data.js";
import { link } from "../database/user_invent_data.js";
import { getUser } from "../logic/users.js";

/**
 * get the inventoy for the user
 * @returns {Promise<{
    id: string;
    name: string;
    description: string;
    price: number;
    ingame: boolean;
    rarity: string;
    _icon: string;
    icon: null;
    category: string;
    isPermanent: boolean;
}[]>}
 */
export async function getInv(){
    return getInventory()
};


/**
 * Handles item usage requests from the user
 * @param {string} item_to_use - ID of the item to use
 * @param {string} token - User's authentication token
 * @returns {Promise<void>}
 */
export function sendUseDemand(item_to_use, token) {
    // TODO: backend logic goes here
    // console.log("item used successfully");
}


/**
 * Handles item buying request from te user
 * @param {object} item_to_buy - the item to buy
 * @param {string} token - User's authentication token
 * @returns {Promise<boolean>}
 */
export async function buy(item_to_buy, token){
    const user = await getUser(token);
    const items = await getInv();
    // check if the item exists in the items, by checking the id attribute only, if doesnt, return false
    const itemExists = items.some(item => item.id === item_to_buy.id);
    if (!itemExists) {
        return false;
    }
    user.points -= item_to_buy.price;
    updateUserDB(token, user)
    const itemIndex = items.findIndex(item => item.id === item_to_buy.id);
    link(token, itemIndex);
    return true;
}