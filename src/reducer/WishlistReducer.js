export const initialStateForWishList = {
    mywishlist: []

}

export const ACTION_TYPES_FOR_WISHLIST = {
    ADD_TO_WISHLIST : "ADD_TO_WISHLIST",
    REMOVE_FROM_WISHLIST : "REMOVE_FROM_WISHLIST",
   
}

export const wishListReducer = (state, action) =>{
    switch(action.type){
        case ACTION_TYPES_FOR_WISHLIST.ADD_TO_WISHLIST: 
        return {...state, mywishlist: [...state.mywishlist, action.payload]}

        case ACTION_TYPES_FOR_WISHLIST.REMOVE_FROM_WISHLIST: 
        return {...state, mywishlist: [...state.mywishlist].filter((wishListItem)=>wishListItem._id!==action.payload)}    

    }
}