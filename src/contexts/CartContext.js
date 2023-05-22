import { createContext, useReducer, useState } from "react";
import { initialStateForCart } from "../reducer/CartReducer";

export const CartContext = createContext()

export default function CartProvider({children}){

    const [ cart, setCart ] = useState([])

    //piping
    const [ cartState, cartDispatch ] = useReducer(cartReducer, initialStateForCart)


    return(
        <CartContext.Provider value ={{cart, cartState, cartDispatch}}>{children}</CartContext.Provider>
    )
}