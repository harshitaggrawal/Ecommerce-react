import React, { createContext } from "react";

import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext();
console.log(all_product);
const ShopContextProvider=(props)=>{
    
    const contextValue={all_product};
    return(
       <ShopContext.Provider value={contextValue}>
        {props.childern}
       </ShopContext.Provider>
    )
}
export default ShopContextProvider;