import { useContext, useState } from "react"
import "../Stylesheets/product-filter.css"
import { ProductsContext } from "../contexts/ProductsContext"
import { ACTION_TYPES } from "../reducer/ProductsReducer"

export default function ProductFilter(){

  const {dispatch, sortByPrice, range, byAvailability, byRatings, byGender, byCategory, byUse} =  useContext(ProductsContext)
  const [rangeVal, setRangeVal ] = useState(1000)
  return(
    <div className="product-filter-app"> 
    <strong>Price</strong>   
    <button className="button-style" value="Clear" onClick={(e)=>{dispatch({type: ACTION_TYPES.CLEAR, payload: e.target.value , rangeVal})}}> Clear </button>

    <div className = "radio-design">
    <li className="list-item-style"><label> 
    <input type="radio" value="lTh"  onChange={(e)=>{dispatch({ type: ACTION_TYPES.LOW_TO_HIGH, payload: e.target.value });}} name="sort-by-price" checked={sortByPrice==="lTh" ? true : false}/>
    Low To High </label> </li>
   <li className="list-item-style"> <label> 
    <input type="radio" value={"hTl"} onChange={(e)=>{dispatch({type: ACTION_TYPES.HIGH_TO_LOW, payload: e.target.value })}} name="sort-by-price" checked={sortByPrice==="hTl" ? true : false}/>
    High To Low</label> </li>
    </div>
    <p><strong> Price range </strong> </p>
    <label style={{color:"orange"}}><strong>1000</strong></label>
    <input type="range" min="1000" step="3000" value={rangeVal} max="99000" onChange={(e)=>{
      setRangeVal(e.target.value);dispatch({type: ACTION_TYPES.RANGE, payload: e.target.value})}} />
      <label style={{color:"orange"}}><strong>99000</strong></label>
    <p><strong> Availability </strong> </p>
    <li className="list-item-style">
    <label id="cb1"> 
    <input id="cb1" type="checkbox" value="cash-on-delivery" onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_AVAILABILITY, payload: e.target.value})}} name="availibility"/> 
    Cash on Delivery </label> </li>
    <li className="list-item-style">
    <label>
    <input type="checkbox" value="one-day-delivery" onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_AVAILABILITY, payload: e.target.value})}} name="availibility" /> 
    One Day delivery </label>
    </li>
    <p> <strong> Reviews and Ratings </strong> </p>
    <li className="list-item-style"><label> <input type="radio" value="5" onChange={(e)=>{dispatch({type: ACTION_TYPES.FIVE_STARS, payload: e.target.value})}} name="reviews" checked={byRatings==="5"}/> 5 stars only</label></li>
    <li className="list-item-style"><label> <input type="radio" value="4" onChange={(e)=>{dispatch({type: ACTION_TYPES.ABOVE_FOUR_STAR, payload: e.target.value})}} name="reviews" checked={byRatings==="4"}/> Above 4 stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="3" onChange={(e)=>{dispatch({type: ACTION_TYPES.ABOVE_THREE_STAR, payload: e.target.value})}} name="reviews" checked={byRatings==="3"}/> Above 3 Stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="2.9" onChange={(e)=>{dispatch({type: ACTION_TYPES.BELOW_THREE_STAR, payload: e.target.value})}} name="reviews" checked={byRatings==="2.9"}/> Below 3 Stars</label></li>
    <p> <strong>By Gender </strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Male" /*checked={byGender.includes("Male")}*/ onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_GENDER, payload: e.target.value})}} name="gender"/> Male </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Female"  onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_GENDER, payload: e.target.value})}} name="gender"/> Female </label> </li>
    <p> <strong>By Category</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Smartwatch" onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_CATEGORY, payload: e.target.value})}} name="category"/> Smartwatches </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Chronological"  onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_CATEGORY, payload: e.target.value})}} name="category"/> Chronological </label> </li>
    <p> <strong>By Use</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="workwear" onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_USE, payload: e.target.value})}} name="by-use"/> Work wear </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="stylish"  onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_USE, payload: e.target.value})}} name="by-use"/> Stylish </label> </li>
    <li className="list-item-style"> <label><input type="checkbox" value="fitness" onChange={(e)=>{dispatch({type: ACTION_TYPES.BY_USE, payload: e.target.value})}} name="by-use"/> Fitness </label> </li>
    </div>
  )
}