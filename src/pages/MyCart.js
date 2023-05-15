import "../Stylesheets/mycart.css"

export default function WishList(){
    return(
        <div className="mycart-container"> 
            <h1> Shopping Cart</h1>
            <p> 0 Item(s) is in your cart</p>
            <div className="mycart">
            <div className="mycart-style"> 
            <img src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G392624_View_2/accessories/smart-watches/apple-watch-ultra-gps-cellular-49-mm-retina-oled-display-green-alpine-loop-medium-smart-watch.jpg" alt="downloadedimage" className="image-cart-style"/>
            <p className="item-name-cart"> <strong> Watch Ultra - by Apple </strong></p>
            <span className="item-current-price-my-cart"><strong>₹79999</strong></span>
            <button onClick={{}} style={{margin: "16px"}} className="button-small">-</button>
            <span><strong>1</strong></span>
            <button onClick={{}} style={{margin: "16px"}} className="button-small">+</button>
            <div>
            <button onClick={{}} className="button-bg-two">Remove from Cart</button>
            <button onClick={{}} className="button-bg-three">Move to Wishlist</button>
            </div>
            </div>
            <div className="details-div">
    <p><strong>Price Details</strong></p>
    <hr/>
    <div className="cart-info">
    <span className="price-description"> Price- </span>
    <span className="item-price-cart"> ₹89000 </span>
    <div>
    <span className="discount-description"> Discount- </span>
    <span className="item-discount-cart">₹79000</span>
    </div>
    <span className="delivery"> Delivery Charges- </span>
    <span> Rs. 40</span>
    <div>
   
    <span className="total-amount"> Total Amount-</span>
    <span>Rs. 4000</span>
    </div>
    </div>
    <hr/>
    <span>
    <p className="saved-container"> Yay! You have saved ₹10000 in this order</p>
    </span>
    <button onClick={{}} className="checkout-button">Checkout</button>
    </div>
        </div>
        </div>
    )
}