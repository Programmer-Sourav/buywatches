import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContext, ProductsProvider } from "./contexts/ProductsContext";
//import { AuthToken } from "./AuthToken";

// Call make Server
makeServer();


export { ProductsContext }


//export { AuthToken }

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ProductsProvider> 
    <App />
    </ProductsProvider> 
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
