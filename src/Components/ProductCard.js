import { useContext } from "react"
import "../Stylesheets/productcard.css"
import { CartContext } from "../contexts/CartContext"

export default function ProductCard({data}){
  const {_id, tag, brand, category, color, discounted_price, id, img, item, price, title} = data;
  const {cartDispatch} = useContext(CartContext)

    const discount_percentage = Math.round((price-discounted_price/100))
    //console.log(discount_percentage)
    console.log(discounted_price)
    return(
     <div className="product-card-layout">
      <img src={img} alt="productimg" className="image-style"/>
      <p className="tag"> {tag}</p>
      <p className="item-tags"> {title} </p>
      <p className="item-name"> <strong> {item} </strong></p>
      <span className="item-price"> ₹{price}</span>
       <span className="item-discount"> ₹{discounted_price}</span>
       <span className="discount">{discount_percentage}</span>
       <div>
      <button onClick={()=>{cartDispatch({type: "ADD_TO_CART", payload: data })}} className="button-bg-two"> Add To Cart </button>
      </div>
      </div>
    )
  }