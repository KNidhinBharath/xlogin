import { useState } from "react"

export default function Login() {
  
    const [welcome,setWelcome] = useState(false)
    const [notValid ,setNotvalid] = useState(true)
    const [formdata,setFormdata] = useState(
        {
            username : "",
            password : ""
        }
    )

    const handleChange = (e) => {
        
        setFormdata({
            ...formdata,[e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formdata.username == "user" && formdata.password == "password"){
            setWelcome(true)
        }
        else {
            setNotvalid(false)
        }

    }

    return (
        <div>
            <h1>Login Page</h1>
            { welcome ? 
                (<p>Welcome,user</p>)
            :( 
            <>
            {!notValid && <p>Invalid username or password</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor = "username">Username:</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={formdata.username} 
                        onChange={handleChange}
                        required></input>

                    <br/>
                    <label htmlFor = "password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={formdata.password}
                        onChange={handleChange}
                        required ></input>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </>
              )
            }
        </div>
    )
}