import { useContext } from "react"
import "../Stylesheets/productcard-wishlist.css"
import { CartContext } from "../contexts/CartContext"
import { WishListContext } from "../contexts/WishListContext"
import { ACTION_TYPES_FOR_WISHLIST } from "../reducer/WishlistReducer"
import { addToCart, removeFromWishList } from "../Utils/NetworkApis";
import { AuthContext } from "../contexts/AuthContext"


export default function Wishlist(){

    const { cartDispatch } = useContext(CartContext)
    const { wishListState, wishListDispatcher } = useContext(WishListContext)
    const { token } = useContext(AuthContext)


    return(
        <div className="mycart-container"> 
        <h1> My Wishlist</h1>
        
        <p> {wishListState.length} Item(s) is in wishlist</p>
        <div className="mycart">
       {  wishListState.map((wishlistItem)=>( 
        <div className="mycart-style"> 
        <img src= {wishlistItem.img} alt="downloadedimage" className="image-cart-style"/>
        <p className="item-name-cart"> <strong> {wishlistItem.item} </strong></p>
        <span className="item-current-price-my-cart"><strong>₹{wishlistItem.price}</strong></span>
        <span className="item-price-my-cart"><strong>₹{wishlistItem.discounted_price}</strong></span>
        <span className="item-offer-my-cart"><strong>10% Off</strong></span>
        <div>
        <button onClick={()=>{removeFromWishList(wishlistItem._id, token, wishListDispatcher)}} className="button-bg-two">Remove</button>
        <button onClick={()=>{addToCart(wishlistItem, token, cartDispatch), removeFromWishList(wishlistItem._id, token, wishListDispatcher)}} className="button-bg-four">Move To Cart</button>
        </div>
        </div>
        
        ))}
     </div>
     </div>
    )
    }
