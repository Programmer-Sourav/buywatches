


export const AuthToken =() =>{

    const getData = async() =>{

        try{
            const creds = {
                email: "imsourav123@gmail.com",
                password: "snath123"

            }

            const res = await fetch("api/auth/login",{
                method: 'POST',
                body: JSON.stringify(creds)
            })

            //const { encodedToken } = await res.json();
            // const response = await res.json();
            // console.log(response)

            const { encodedToken } = await res.json();
            localStorage.setItem("encodedToken", encodedToken)
            console.log(localStorage.getItem("encodedToken"))
        }
        catch(e){
        console.error(e)
        }

    } 

return(
    <div>
    <button onClick={getData}>Hello!!!!</button>
    </div>
)
}