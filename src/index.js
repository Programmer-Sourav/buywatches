import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContext, ProductsProvider } from "./contexts/ProductsContext";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { CartContext, CartProvider }from "./contexts/CartContext";
//import { AuthToken } from "./AuthToken";

// Call make Server
makeServer();


export { ProductsContext }
export { AuthContext}
export { CartContext }

//export { AuthToken }

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <ProductsProvider> 
    <CartProvider>  
    <App />
    </CartProvider>
    </ProductsProvider> 
    </AuthProvider>  
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
