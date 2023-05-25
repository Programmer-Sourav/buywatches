import { createContext, useReducer } from "react";
import { initialStateForWishList, wishListReducer } from "../reducer/WishlistReducer";

export const WishListContext = createContext()

export function WishListProvider({children}){

    const [wishState, wishListDispatcher] = useReducer(wishListReducer, initialStateForWishList)



    return (
        <WishListContext.Provider value ={{wishListState: wishState.mywishlist, wishListDispatcher }}>{children}</WishListContext.Provider>
    )
}