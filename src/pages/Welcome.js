export default function Welcome(){

    const result = localStorage.getItem("encodedToken")
   // console.log(675, result)

    const signout = () =>{
        
         const result = localStorage.removeItem("encodedToken")
        // console.log(676, result)   
    }
    return(
        <div>
            <h1>Dummy page after signin. I will replace it...</h1>
            <button onClick = {()=>signout()}>Sign Out</button>
        
        </div>
    )
}