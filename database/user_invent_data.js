
export const correspondingInventory = [
    { userId: "user_lt2qh99", itemIndex: 1, amount: 2 }, // Converted from array
    { userId: "user_lt2qh99", itemIndex: 2, amount: 1 },
    { userId: "user_lt2qh99", itemIndex: 4, amount: 1 },
    { userId: "user_lt2qh99", itemIndex: 6, amount: 1 },
    { userId: "user_1", itemIndex: 5, amount: 1 },
    { userId: "user_2", itemIndex: 1, amount: 1 },
    { userId: "user_3", itemIndex: 5, amount: 1 },
    { userId: "user_4", itemIndex: 2, amount: 1 },
    { userId: "user_5", itemIndex: 2, amount: 1 },
];


export const getCorr = async (token) => {
    return correspondingInventory.filter(rel => {
        return rel.userId == token;
    })
}


export const link = (token, itemIndex) => {
    
    getCorr(token).then(data => {
        
        let notFound = true;
        // console.log([...data])
        
        data.forEach((corr) => {
            if(corr.itemIndex == itemIndex){
                corr.amount++;
                notFound = false;
                return;
            }
        })
        
        if(notFound){
            correspondingInventory.push({userId: token, itemIndex, amount: 1})
        }

        })
}