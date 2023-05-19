import { useContext } from "react"
import "../Stylesheets/product-filter.css"
import { ProductsContext } from "../contexts/ProductsContext"
import { ACTION_TYPES } from "../reducer/ProductsReducer"

export default function ProductFilter(){

  const {dispatch} =  useContext(ProductsContext)

  return(
    <div className="product-filter-app"> 
    <strong>Price</strong>   
    <button className="button-style"> Clear </button>

    <div className = "radio-design">
    <li className="list-item-style"><label> 
    <input type="radio" value="lTh"  onChange={(e)=>{dispatch({ type: ACTION_TYPES.LOW_TO_HIGH, payload: e.target.value });}} name="sort-by-price" />
    Low To High </label> </li>
   <li className="list-item-style"> <label> 
    <input type="radio" value={"hTl"} onChange={(e)=>{dispatch({type: ACTION_TYPES.HIGH_TO_LOW, payload: e.target.value })}} name="sort-by-price"/>
    High To Low</label> </li>
    </div>
    <p><strong> Price range </strong> </p>
    <input type="range" min={0} value={0} max={100} />
    <p><strong> Availability </strong> </p>
    <li className="list-item-style">
    <label> 
    <input type="checkbox" value="cash-on-delivery" onChange={(e)=>{dispatch({type: ACTION_TYPES.CASH_ON_DELIVERY, payload: e.target.value})}} name="availibility" /> 
    Cash on Delivery </label> </li>
    <li className="list-item-style">
    <label>
    <input type="checkbox" value="One-day-delivery" onChange={(e)=>{dispatch({type: ACTION_TYPES.ONE_DAY_DELIVERY, payload: e.target.value})}} name="availibility"/> 
    One Day delivery </label>
    </li>
    <p> <strong> Reviews and Ratings </strong> </p>
    <li className="list-item-style"><label> <input type="radio" value="5" onChange={(e)=>{dispatch({type: ACTION_TYPES.FIVE_STARS, payload: e.target.value})}} name="reviews"/> 5 stars only</label></li>
    <li className="list-item-style"><label> <input type="radio" value="4" onChange={(e)=>{dispatch({type: ACTION_TYPES.ABOVE_FOUR_STAR, payload: e.target.value})}} name="reviews"/> Above 4 stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="3" onChange={(e)=>{dispatch({type: ACTION_TYPES.ABOVE_THREE_STAR, payload: e.target.value})}} name="reviews"/> Above 3 Stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="2.9" onChange={(e)=>{dispatch({type: ACTION_TYPES.BELOW_THREE_STAR, payload: e.target.value})}} name="reviews"/> Below 3 Stars</label></li>
    <p> <strong>By Gender </strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Male" onChange={(e)=>{dispatch({type: ACTION_TYPES.MALE, payload: e.target.value})}} name="gender"/> Male </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Female" onChange={(e)=>{dispatch({type: ACTION_TYPES.FEMALE, payload: e.target.value})}} name="gender"/> Female </label> </li>
    <p> <strong>By Category</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Smartwatch" onChange={(e)=>{dispatch({type: ACTION_TYPES.SMARTWATCHES, payload: e.target.value})}} name="category"/> Smartwatches </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Chronological" onChange={(e)=>{dispatch({type: ACTION_TYPES.CHRONOLOGICAL, payload: e.target.value})}} name="category"/> Chronological </label> </li>
    <p> <strong>By Use</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="workwear" onChange={(e)=>{dispatch({type: ACTION_TYPES.WORKWEAR, payload: e.target.value})}} name="by-use"/> Work wear </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Stylish" onChange={(e)=>{dispatch({type: ACTION_TYPES.STYLISH, payload: e.target.value})}} name="by-use"/> Stylish </label> </li>
    <li className="list-item-style"> <label><input type="checkbox" value="fitness" onChange={(e)=>{dispatch({type: ACTION_TYPES.FITNESS, payload: e.target.value})}} name="by-use"/> Fitness </label> </li>
    </div>
  )
}