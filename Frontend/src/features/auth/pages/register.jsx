import react, { useState } from 'react'
import {useNavigate, Link} from "react-router"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate() //to navigate to login page when user clicks on login button
    const {loading, handleRegister} = useAuth()

    const[username, setUsername]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword] = useState("")

    const handleSumbit = async (e) => { //to prevent refresh page when submit button is clicked
        e.preventDefault()
       await handleRegister({username, email, password})
        navigate('/')
    }
     if(loading){
        return (<main> Loading...</main>)
    }

  return (
   <main>
        <div className="form">
            
        </div>

        <form onSubmit={handleSumbit}>
             <h1>Register</h1>
            <div className="input-group">
                <label htmlFor = "Username">Username</label>
                <input 
                onChange={(e)=>{setUsername(e.target.value)}}
                type="text" id="Username" name="Username" placeholder="Enter your username"/>
            </div>

            <div className="input-group">
                <label htmlFor = "email">Email</label>
                <input 
                 onChange={(e)=>{setEmail(e.target.value)}}
                type="email" id="email" name="email" placeholder="Enter your email"/>
            </div>

             <div className="input-group">
                <label htmlFor = "password">Password</label>
                <input
                 onChange={(e)=>{setPassword(e.target.value)}}
                type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>

            <button className="button primary">Submit</button>
        </form>
        <p className='login-link'>Already have an account? <Link to="/login">Login</Link></p>
   </main>
  )
}

export default Register