import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ACTION_TYPES_FOR_CART } from "../reducer/CartReducer"
import toast, { Toaster } from "react-hot-toast";
import { ACTION_TYPES_FOR_WISHLIST } from "../reducer/WishlistReducer";




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
        toast.success("Item successfully added to the cart")  
        
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
        toast.success("Item successfully removed from cart")  
        //console.log("4456dcart", cart)
        // cartDispatch({type: ACTION_TYPES_FOR_CART.REMOVE_FROM_CART, payload: cartItem })
        
    }
    catch(e){
    toast.error("Oops! Some Error Occured"+ e)  
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
export const decrementQuantity =async (productId, token) =>{
    // console.log(productId)
    // console.log(token)
   
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
        
        
      
        toast("Item Quantity reduced", {
            style: { border: "1px solid orange", color: "orange", padding: "8px" }
          });
        

        
    }
    catch(e){
    toast.error("Oops! Some Error Occured"+ e)    
    console.error(e)
    }
}

export const addToWishlist = async (wishlistItem, token, wishListDispatcher) =>{
   console.log(5566, JSON.stringify(wishlistItem))
    try{
      
        const res = await fetch("/api/user/wishlist",{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
            body: JSON.stringify(wishlistItem)
        })
        
       
        const { wishlist } = await res.json();
        wishListDispatcher({type: ACTION_TYPES_FOR_WISHLIST.ADD_TO_WISHLIST, payload: wishlistItem })
        toast.success("Item added to Wishlist")  
        
    }
    catch(e){
    console.error(e)
    }

    

}

export const removeFromWishList = async (wishlistItem,token, wishListDispatcher) =>{
    try{
        const productId = wishlistItem
        console.log("1245678", productId)
        const res = await fetch(`/api/user/wishlist/${productId}`,{
            method: 'DELETE',
            
            headers: {
                  authorization: token,
                }
        })
        

        const { wishlist } = await res.json();
        toast.success("Item successfully removed from Wishlist")  
       // console.log("4456dwishlist", wishlist)
        wishListDispatcher({type: ACTION_TYPES_FOR_WISHLIST.REMOVE_FROM_WISHLIST, payload: wishlistItem})
        
    }
    catch(e){
    toast.error("Oops! Some Error Occured"+ e)  
    console.error(e)
    }

}