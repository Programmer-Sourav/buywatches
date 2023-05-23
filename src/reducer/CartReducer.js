
export const initialStateForCart = {
    currentcart: []
}

export const ACTION_TYPES_FOR_CART = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART", 
    INCREMENT_QTY: "INCREMENT_QTY",
    DECREMENT_QTY: "DECREMENT_QTY"
}

export const cartReducer = (state, action) =>{
    switch(action.type){
        case ACTION_TYPES_FOR_CART.ADD_TO_CART: 
        //console.log(12345, {...state, currentcart: [...state.currentcart, {...action.payload, quantity: 1}]})
        return {...state, currentcart: [...state.currentcart, {...action.payload, quantity: 1}] }

        case ACTION_TYPES_FOR_CART.INCREMENT_QTY:
        // console.log(12546, {
        //     ...state,currentcart: [...state.currentcart].map((cartItem) =>cartItem.id === action.payload? { ...cartItem, quantity: cartItem.quantity+1}: cartItem
        //     )
        //   })
        return {...state, currentcart: [...state.currentcart].map((cartItem)=> cartItem.id===action.payload? {...cartItem, quantity: cartItem.quantity+1} :cartItem ) }
        
        case ACTION_TYPES_FOR_CART.DECREMENT_QTY: 
        return {...state, currentcart: [...state.currentcart].map((cartItem)=>cartItem.id===action.payload ? {...cartItem, quantity: cartItem.quantity-1} : cartItem)}

        case ACTION_TYPES_FOR_CART.REMOVE_FROM_CART: 
        return {...state, currentcart: [...state.currentcart].filter((cartItem)=>cartItem.id!=action.payload.id)}


    }
}