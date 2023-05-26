import { useContext } from "react"
import "../Stylesheets/productcard.css"

import { CartContext } from "../contexts/CartContext"
import { AuthContext } from "../contexts/AuthContext"
import { addToCart, addToWishlist, removeFromWishList } from "../Utils/NetworkApis";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import { WishListContext } from "../contexts/WishListContext"



export default function ProductCard({data}){
  const {_id, tag, brand, category, color, discounted_price, id, img, item, price, title} = data;
  const {cart,cartDispatch} = useContext(CartContext)
  const { wishListState, wishListDispatcher } = useContext(WishListContext)
  const { token } = useContext(AuthContext)
  const pid = _id;
  const navigate = useNavigate();
  

    const discount_percentage = Math.round((price-discounted_price/100))
  

    function checkIfTheItemIsInWishlist(item_id){
      const itemFound = wishListState.find((item)=>item._id === item_id)
      return itemFound
    }

    function checkIfITemIsInTheCart(data){
       const itemFound = cart.find((item)=>item._id === data._id)
      return itemFound
    }

    const goToCart = () =>{
      //window.location.href = "/cart"
      navigate("/cart")
    }



  
    return(
    
     <div className="product-card-layout" >
     { console.log(8888, wishListState)}
      {
        checkIfTheItemIsInWishlist(_id) ?
      <span className='clickableIcon' onClick={()=>{removeFromWishList(_id, token, wishListDispatcher)}}><i class="fa fa-heart" style={{color: "red"}}></i></span> :
      <span className='clickableIcon' onClick={()=>{addToWishlist(data, token, wishListDispatcher)}}><i class="fa fa-heart"></i></span>
      }
     <div className="product-parent" onClick={()=>{navigate(`/description/${pid}`)}}>
      <img src={img} alt="productimg" className="image-style" />
      
      <p className="tag"> {tag}</p>
      <p className="item-tags"> {title} </p>
      <p className="item-name" > <strong> {item} </strong></p>
      <span className="item-price"> ₹{price}</span>
       <span className="item-discount"> ₹{discounted_price}</span>
       <span className="discount">{discount_percentage}</span>
       <div>
      </div>
      </div>
      
     {checkIfITemIsInTheCart(data) ?
      <button onClick={goToCart} className="button-bg-two">Go to Cart</button> :
      <button onClick={()=>{addToCart(data, token, cartDispatch)}} className="button-bg-two">Add To Cart</button>}
      </div>
      
    )
  }