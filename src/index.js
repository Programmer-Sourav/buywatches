import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContext, ProductsProvider } from "./contexts/ProductsContext";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
//import { AuthToken } from "./AuthToken";

// Call make Server
makeServer();


export { ProductsContext }
export { AuthContext}

//export { AuthToken }

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <ProductsProvider> 
    <App />
    </ProductsProvider> 
    </AuthProvider>  
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
