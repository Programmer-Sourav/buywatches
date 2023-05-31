import  FixedHeader from "./FixedHeader/FixedHeader"
import ProductFilter from "./pages/ProductFilter"
import ProductCard from "./Components/ProductCard";
import ProductCardForWishlist from "./Components/ProductCardForWishlist"
import MyCart from "./pages/MyCart"
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom"
import ProductList from "./pages/ProductList";
import Success from "./pages/Success";
import { RequiresAuth } from "./contexts/RequiresAuth"
import MockMan from "mockman-js"

import { Toaster } from "react-hot-toast";


import './App.css';
import { AuthToken } from "./Home";
import Welcome from "./pages/Welcome";
import ProductDescription from "./Components/ProductDescription";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import AddressPage from "./pages/AddressPage";
import ProfileMain from "./pages/profileMain";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./FixedHeader/Footer";






function App() {
  
  return (
    <div className="App">
       {<Toaster position="top-right" reverseOrder={true} />}
       <FixedHeader/>
       {/* <ProductFilter/> */}
       {/* <ProductCard/> */}
       {/* <ProductDescription/> */}
       {/* <ProductCardForWishlist/> */}
       {/* <MyCart/> */}
       {/* <LoginPage/> */}
       
       <Routes> 
        {/* <Route path="/" element={<h1>Hello Welcome</h1>}/> */}
        <Route path="/" element={<AuthToken/>}/>
        <Route path="/mockman" element={<MockMan/>}/>
        <Route path="/store" element={<ProductList/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<RequiresAuth><MyCart/></RequiresAuth>}/>
        <Route path="/wishlist" element={<RequiresAuth><Wishlist/></RequiresAuth>}/>
        <Route path="/description/:pid" element={<ProductDescription/>}/>
        <Route path="/checkout" element= {<RequiresAuth><Checkout/></RequiresAuth>}/>
        <Route path="/fakewelcome" element={<Welcome/>}/>
        <Route path = "/profile" element= {<RequiresAuth><ProfileMain/></RequiresAuth>}/>
        <Route path="/profile-details" element={<RequiresAuth><AddressPage/></RequiresAuth>}/>
        <Route path="/address" element={<RequiresAuth><AddressPage/></RequiresAuth>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/signup"  element={<SignUpPage/>}/>

       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
