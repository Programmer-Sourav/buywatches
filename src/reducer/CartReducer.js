
export const initialStateForCart = {
    currentcart: []
}

export const ACTION_TYPES_FOR_CART = {
    ADD_TO_CART: "ADD_TO_CART",
    REEMOVE_FROM_CART: "REMOVE_FROM_CART"
}

export const cartReducer = (state, action) =>{
    switch(action.type){
        case ACTION_TYPES_FOR_CART.ADD_TO_CART: 
        console.log(12345, {...state, currentcart: [...state.currentcart, action.payload]})
        return {...state, currentcart: [...state.currentcart, action.payload]}
    }
}