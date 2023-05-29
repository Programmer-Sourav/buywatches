import { useContext, useEffect, useState } from "react"
import "../Stylesheets/address-page.css"
import ProductCard from "../Components/ProductCard"
import { ProductsContext } from "../contexts/ProductsContext"
import { ACTION_TYPES } from "../reducer/ProductsReducer"

export default function AddressPage(){
    
    const { addressState, dispatch, address, addAddressHandler } = useContext(ProductsContext)

    const [name, setName ] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [city, setCity] = useState("")
    const [userAddress, setUserAddress] = useState("")

   
    const onChangeHandler = (e) =>{
      setName(e.target.value)
    }
    
    const onChangePhoneHandler = (e) =>{
      setPhoneNumber(e.target.value)
    }

    const onChangeCityHandler = (e) =>{
      setCity(e.target.value)
    }

    const onChangeAddressHandler = (e) =>{
      setUserAddress(e.target.value)
    }
    const addAddress = () =>{
        addAddressHandler({id: address.length+1, fullname: name, number: phoneNumber, cityName: city, addressDetails: userAddress})
        setName("")
        setPhoneNumber("")
        setCity("")
        setUserAddress("")
    }

    const deleteAddress = (itemId) =>{
        dispatch({type: ACTION_TYPES.DELETE_ADDRESS, payload: itemId})
        console.log({type: ACTION_TYPES.DELETE_ADDRESS, payload: itemId})
    }


    return(
        <div> 
            <h1> Address Management</h1>
            <li> <input type="text" value={name} onChange={(e)=>onChangeHandler(e)}  placeholder="Enter name" className="input-style"></input></li>
            <li> <input type="number" value = {phoneNumber} onChange={(e)=>onChangePhoneHandler(e)}  placeholder="Enter Phone number" className="input-style"></input></li>
            <li> <input type="text" value ={city} onChange={(e)=>onChangeCityHandler(e)}  placeholder="Enter City" className="input-style"></input></li>
            <li> <input type="text" value = {userAddress} onChange={(e)=>onChangeAddressHandler(e)}  placeholder="Enter Address" className="input-style"></input></li>
            
           
            <button onClick={()=>addAddress() } className="button-style-address">Add Address</button>
            {
              
                address.map((item)=>(
                    <li style={{border: "1px solid gray", margin: "32px"}}>
                    <h4>({item.id}) {item.fullname}</h4>
                    {item.number}, {item.cityName},  {item.addressDetails}
                    {item.id===1 ? 
                    <h3 style={{margin: "4px"}}>Default Details</h3> :
                    <button onClick={()=>deleteAddress(item.id)} className="button-style-address">Delete Address</button>}
                    </li>
                ))
            }
            
        </div>
    )
}