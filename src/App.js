import  FixedHeader from "./FixedHeader/FixedHeader"
import ProductFilter from "./pages/ProductFilter"
import ProductCard from "./Components/ProductCard";
import ProductDescription from "./Components/ProductDescription";
import ProductCardForWishlist from "./Components/ProductCardForWishlist"
import MyCart from "./pages/MyCart"
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom"
import MockMan from "mockman-js"


import './App.css';



function App() {
  return (
    <div className="App">
       {/* <FixedHeader/> */}
       {/* <ProductFilter/> */}
       {/* <ProductCard/> */}
       {/* <ProductDescription/> */}
       {/* <ProductCardForWishlist/> */}
       {/* <MyCart/> */}
       {/* <LoginPage/> */}
       <Routes> 
        <Route path="/" element={<h1>Hello Welcome</h1>}/>
        <Route path="/mockman" element={<MockMan/>}/>
       </Routes>
    </div>
  );
}

export default App;
