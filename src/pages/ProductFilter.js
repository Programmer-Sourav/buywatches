import "../Stylesheets/product-filter.css"

export default function ProductFilter(){
  return(
    <div className="product-filter-app"> 
    <strong>Price</strong>   
    <button className="button-style"> Clear </button>

    <div className = "radio-design">
    <li className="list-item-style"><label> 
    <input type="radio" value="lTh"  onChnage={{}} name="sort-by-price" />
    Low To High </label> </li>
   <li className="list-item-style"> <label> 
    <input type="radio" value={"hTl"} onChnage={{}} name="sort-by-price"/>
    High To Low</label> </li>
    </div>
    <p><strong> Price range </strong> </p>
    <input type="range" min={0} value={0} max={100} />
    <p><strong> Availability </strong> </p>
    <li className="list-item-style">
    <label> 
    <input type="checkbox" value="Out-of-stock" onChnage={{}} name="availibility" /> 
    Cash on Delivery </label> </li>
    <li className="list-item-style">
    <label>
    <input type="checkbox" value="One-day-delivery" onChnage={{}} name="availibility"/> 
    One Day delivery </label>
    </li>
    <p> <strong> Reviews and Ratings </strong> </p>
    <li className="list-item-style"><label> <input type="radio" value="5" onChnage={{}} name="reviews"/> 5 stars only</label></li>
    <li className="list-item-style"><label> <input type="radio" value="4" onChnage={{}} name="reviews"/> Above 4 stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="3" onChnage={{}} name="reviews"/> Above 3 Stars</label></li>
    <li className="list-item-style"><label> <input type="radio" value="2.9" onChnage={{}} name="reviews"/> Below 3 Stars</label></li>
    <p> <strong>By Gender </strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Male" onChange={{}} name="gender"/> Male </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Female" onChange={{}} name="gender"/> Female </label> </li>
    <p> <strong>By Category</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="Smartwatch" onChange={{}} name="category"/> Smartwatches </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Classic" onChange={{}} name="category"/> Chronological </label> </li>
    <p> <strong>By Use</strong></p>
    <li className="list-item-style"> <label><input type="checkbox" value="workwear" onChange={{}} name="by-use"/> Work wear </label></li>
    <li className="list-item-style"> <label><input type="checkbox" value="Stylish" onChange={{}} name="by-use"/> Stylish </label> </li>
    <li className="list-item-style"> <label><input type="checkbox" value="fitness" onChange={{}} name="by-use"/> Fitness </label> </li>
    </div>
  )
}