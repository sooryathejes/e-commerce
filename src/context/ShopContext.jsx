import { createContext } from "react";
import { collapseToast } from "react-toastify";
import { products } from "../assets/assets";
import React from "react";

export const ShopContext = createContext();

const currency = '$'
const delivery_fee = 10

const ShopContextProvider = (props) => {
    const value = {
        products,currency,delivery_fee
    }

    return(
        <ShopContext.Provider value={value}> 
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;  