import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ACTION_TYPES_FOR_CART } from "../reducer/CartReducer"




export const getCart= async (token) =>{
    try{
         const res = await fetch("/api/user/cart",{
            method: 'GET',
            headers: {
                authorization: token,
              }
        })

        const { cart } = await res.json();
        console.log(6565, cart)
    }
    catch(e){
    console.error(e)
    }

}

export const addToCart = async (cartItem, token, cartDispatch) =>{
   
    try{
      
        const res = await fetch("/api/user/cart",{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
            body: JSON.stringify(cartItem)
        })
        
       
        const { cart } = await res.json();
       // console.log("4455cart", cart)
        cartDispatch({type: "ADD_TO_CART", payload: cartItem })
        
    }
    catch(e){
    console.error(e)
    }

}

export const deleteItemFromCart = async (cartItem,token) =>{
    try{
        const productId = cartItem.id
        console.log("1245678", productId)
        const res = await fetch(`/api/user/cart/${productId}`,{
            method: 'DELETE',
            
            headers: {
                  authorization: token,
                }
        })
        

        const { cart } = await res.json();
        //console.log("4456dcart", cart)
        // cartDispatch({type: ACTION_TYPES_FOR_CART.REMOVE_FROM_CART, payload: cartItem })
        
    }
    catch(e){
    console.error(e)
    }

}

export const incrementQuantity =async ( productId,  token) =>{
    // console.log("INCR", productId)
    // console.log("TOKEN", token)
    const value = {action: {
        type: "increment"
    }}
   
    try{
      
        const res = await fetch(`/api/user/cart/${productId}`,{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
            body: JSON.stringify(value)  
            
        })
        
        //cartDispatch({type: ACTION_TYPES_FOR_CART.INCREMENT_QTY, payload: productId})
        const { cart } = await res.json();
       
        console.log("4455cart", cart)
        
    }
    catch(e){
    console.error(e)
    }

}
export const decrementQuantity =async (productId, token,  cartDispatch) =>{
    console.log(productId)
    console.log(token)
    try{

        const value = {action: {
            type: "decrement"
        }}
      
        const res = await fetch(`/api/user/cart/${productId}`,{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
           body: JSON.stringify(value)
        })
        
        
        const { cart } = await res.json();
        
        console.log("4455cart", cart)
        
    }
    catch(e){
    console.error(e)
    }
}