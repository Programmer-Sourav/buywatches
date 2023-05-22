import { useContext } from "react"
import "../Stylesheets/mycart.css"
import { CartContext } from "../contexts/CartContext"
import { ACTION_TYPES_FOR_CART } from "../reducer/CartReducer"

export default function MyCart(){

    const { cart, cartDispatch } = useContext(CartContext)
    console.log("14566", cart.length)
    //{_id, tag, brand, category, color, discounted_price, id, img, item, price, title}

    const totalPrice = cart.reduce((acc, cur)=>acc+ cur.price,0)
    console.log(1256, totalPrice)
    const total_discounted_price = cart.reduce((acc, cur)=>acc+cur.discounted_price,0)
    console.log(1257, total_discounted_price )
    const total_discount = totalPrice-total_discounted_price;
    console.log(1258, total_discount)
    let initialQty = 1


    return(
        <div className="mycart-container"> 
            <h1> Shopping Cart</h1>
            <p> {cart.length} Item(s) is in your cart</p>
            <div className="mycart">
            {  cart.map((cartItem)=>(
            <div className="mycart-style"> 
            <img src={cartItem.img} alt="downloadedimage" className="image-cart-style"/>
            <p className="item-name-cart"> <strong> {cartItem.item} </strong></p>
            <span className="item-current-price-my-cart"><strong>{cartItem.discounted_price}</strong></span>
            <button onClick={()=>{cartDispatch({type: ACTION_TYPES_FOR_CART.DECREMENT_QTY, payload: cartItem.id})}} style={{margin: "16px"}} className="button-small">-</button>
            <span><strong>{initialQty}</strong></span>
            <button onClick={()=>{cartDispatch({type: ACTION_TYPES_FOR_CART.INCREMENT_QTY, payload: cartItem.id })}} style={{margin: "16px"}} className="button-small">+</button>
            <div>
            <button onClick={()=>{cartDispatch({type: ACTION_TYPES_FOR_CART.REMOVE_FROM_CART, payload: cartItem })}} className="button-bg-two">Remove from Cart</button>
            <button onClick={{}} className="button-bg-three">Move to Wishlist</button>
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
    <button onClick={{}} className="checkout-button">Checkout</button>
    </div>
        </div>
        </div>
    )
}