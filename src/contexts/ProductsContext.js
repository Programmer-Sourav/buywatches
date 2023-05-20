import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, productsReducer } from "../reducer/ProductsReducer";

export const ProductsContext = createContext();

export function ProductsProvider({children}){

   const [ productsList, setProductsList ] = useState([]) /**State to hold data from api */
   const [ loading, setLoading ] = useState(false)
   const [state, dispatch] = useReducer(productsReducer, initialState)

   const getProducts = async() =>{
    setLoading(true)
    try{
       const response = await fetch("/api/products",{
        method: 'GET'
    })

    const { products } = await response.json();
    //console.log(products)
    setLoading(false)
    setProductsList(products)
    }
    catch(error){
        console.error(error)
    }
   }


   useEffect(()=>{getProducts()},[])


    return(
        <ProductsContext.Provider value = {{productsList, loading, state, sortByPrice: state.sortByPrice, range: state.range, byAvailability: state.byAvailability, byRatings: state.byRatings, byGender: state.byGender, byCategory: state.byCategory, byUse: state.byUse,  dispatch}}>{children}</ProductsContext.Provider>
    )

}