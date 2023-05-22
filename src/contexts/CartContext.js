import { createContext, useReducer, useState } from "react";
import { cartReducer, initialStateForCart } from "../reducer/CartReducer";

export const CartContext = createContext()

export function CartProvider({children}){

    //piping
    const [ cartState, cartDispatch ] = useReducer(cartReducer, initialStateForCart)


    return(
        <CartContext.Provider value ={{cart: cartState.currentcart, cartDispatch}}>{children}</CartContext.Provider>
    )
}