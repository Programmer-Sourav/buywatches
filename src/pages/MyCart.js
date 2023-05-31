import { useContext } from "react"
import "../Stylesheets/mycart.css"
import { CartContext } from "../contexts/CartContext"
import { ACTION_TYPES_FOR_CART } from "../reducer/CartReducer"
import { deleteItemFromCart, getCart, incrementQuantity, decrementQuantity, addToWishlist } from "../Utils/NetworkApis"
import { AuthContext } from "../contexts/AuthContext"
import { ProductsContext } from "../contexts/ProductsContext"
import { ACTION_TYPES } from "../reducer/ProductsReducer"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { WishListContext } from "../contexts/WishListContext"





export default function MyCart(){

    const { cart, cartDispatch } = useContext(CartContext)
    const { token } = useContext(AuthContext)
    const { dispatch } = useContext( ProductsContext )
    const { wishListDispatcher } = useContext( WishListContext )
    //console.log("14566", cart.length)
    //{_id, tag, brand, category, color, discounted_price, id, img, item, price, title}

    const totalPrice = cart.reduce((acc, cur)=>acc+ cur.price*cur.quantity,0)
  
    const total_discounted_price = cart.reduce((acc, cur)=>acc+cur.discounted_price*cur.quantity,0)
    
    const total_discount = totalPrice-total_discounted_price;
    
    const navigate = useNavigate()

    const goToCheckout = (cart) =>{
        // <Link to = "/checkout"> </Link>
        navigate("/checkout")
        dispatch({type: ACTION_TYPES.PRICE_DETAILS, payload: {price: totalPrice, discounted_price: total_discounted_price, discount: total_discount, cartItem: cart}})
       }
    

    return(
        <div className="mycart-container"> 
            <h1> Shopping Cart</h1>
            
            <p> {cart.length} Item(s) is in your cart</p>
            <div className="mycart">
            {  cart.map((cartItem)=>(
            <div className="mycart-style" key={cartItem.id}> 
            <img src={cartItem.img} alt="downloadedimage" className="image-cart-style"/>
            <p className="item-name-cart"> <strong> {cartItem.item} </strong></p>
            <span className="item-current-price-my-cart"><strong>{cartItem.discounted_price}</strong></span>
            <button onClick={()=>{decrementQuantity(cartItem._id, token), cartDispatch({type: ACTION_TYPES_FOR_CART.DECREMENT_QTY, payload: cartItem._id})}} style={{margin: "16px"}} className="button-small" disabled = {cartItem.quantity>0? false : true}>-</button>
            <span><strong>{cartItem.quantity}</strong></span>
            <button onClick={()=>{incrementQuantity(cartItem._id,  token), cartDispatch({type: ACTION_TYPES_FOR_CART.ADD_TO_CART_OR_INCREMENT_QTY, payload: cartItem})}} style={{margin: "16px"}} className="button-small">+</button>
            <div>
            <button onClick={()=>{deleteItemFromCart(cartItem, token), cartDispatch({type: ACTION_TYPES_FOR_CART.REMOVE_FROM_CART, payload: cartItem })}} className="button-bg-two">Remove from Cart</button>
            <button onClick={()=>{deleteItemFromCart(cartItem, token), cartDispatch({type: ACTION_TYPES_FOR_CART.REMOVE_FROM_CART, payload: cartItem }), addToWishlist(cartItem, token, wishListDispatcher)}} className="button-bg-three">Move to Wishlist</button>
           
            </div>
            </div>
            ))}
            <div className="details-div">
    <p><strong>Price Details</strong></p>
    <hr/>
    <div className="cart-info">
    <span className="price-description"> Price- </span>
    <span className="item-price-cart"> ₹{totalPrice}</span>
    <div>
    <span className="discount-description"> Discount- </span>
    <span className="item-discount-cart">₹{total_discount}</span>
    </div>
    <span className="delivery"> Delivery Charges- </span>
    <span> ₹0</span>
    <div>
   
    <span className="total-amount"> Total Amount-</span>
    <span>₹{total_discounted_price}</span>
    </div>
    </div>
    <hr/>
    <span>
    <p className="saved-container"> Yay! You have saved ₹{total_discount} in this order</p>
    </span>
    <button onClick={()=>{goToCheckout(cart)}} className="checkout-button">Checkout</button>
    </div>
        </div>
        </div>
    )
}