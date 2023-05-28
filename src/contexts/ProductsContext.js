import { createContext, useEffect, useReducer, useState } from "react";
import { ACTION_TYPES, initialState, productsReducer } from "../reducer/ProductsReducer";

export const ProductsContext = createContext();

export function ProductsProvider({children}){

   //const [ productsList, setProductsList ] = useState([]) /**State to hold data from api */
   const [ loading, setLoading ] = useState(false)
   const [state, dispatch] = useReducer(productsReducer, initialState)
   const [address, setAddress] = useState([])


   const getAddress=() =>{
    /** I am setting initial state here in useffect instead of passing while creating useState() as I am using address.length as the id... */
    const initial_default_address = {id: address.length+1, fullname: "Sourav Nath", number: "9916000000", cityName: "Santirbazar", addressDetails: "9916000000, STbazar (near Agartala),  XYZ para, Stbz, Tripura, 790000"}
    setAddress([initial_default_address])
   }

   const getProducts = async() =>{
    setLoading(true)
    try{
       const response = await fetch("/api/products",{
        method: 'GET'
    })

    const { products } = await response.json();
    //console.log(products)
    setLoading(false)
    //setProductsList(products)
    dispatch(
        {type: ACTION_TYPES.INITIALIZE,
         cur_products: products
        }
    )
    }
    catch(error){
        console.error(error)
    }
   }
   const addAddressHandler = (addressItem) =>{
    setAddress(address=>[...address, addressItem])
   }
   

   useEffect(()=>{getProducts()},[])

   useEffect(()=>{getAddress()},[])
   

    return(
        <ProductsContext.Provider value = {{ loading, state, productsState: state.currentProducts, sortByPrice: state.sortByPrice, range: state.range, byAvailability: state.byAvailability, byRatings: state.byRatings, byGender: state.byGender, byCategory: state.byCategory, byUse: state.byUse, dispatch, search : state.search, priceDetails: state.priceDetails, addressState: state.address, address, addAddressHandler }}>{children}</ProductsContext.Provider>
    )

}