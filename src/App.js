import  FixedHeader from "./FixedHeader/FixedHeader"
import ProductFilter from "./pages/ProductFilter"
import ProductCard from "./Components/ProductCard";
import ProductCardForWishlist from "./Components/ProductCardForWishlist"
import MyCart from "./pages/MyCart"
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom"
import ProductList from "./pages/ProductList";
import MockMan from "mockman-js"

import { Toaster } from "react-hot-toast";


import './App.css';
import { AuthToken } from "./AuthToken";
import Welcome from "./pages/Welcome";
import ProductDescription from "./Components/ProductDescription";
import Wishlist from "./pages/Wishlist";



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
        <Route path="/cart" element={<MyCart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/description/:pid" element={<ProductDescription/>}/>
        <Route path="/fakewelcome" element={<Welcome/>}/>

       </Routes>
    </div>
  );
}

export default App;
