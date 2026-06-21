import react, { useState } from 'react'
import {useNavigate, Link} from "react-router"
import { useAuth } from '../hooks/useAuth'
import Spinner from '../../../components/Loaders/Spinner'

const Register = () => {

    const navigate = useNavigate() //to navigate to login page when user clicks on login button
    const {loading, handleRegister} = useAuth()

    const[username, setUsername]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword] = useState("")
    const[passwordError, setPasswordError] = useState("")

    const isValidPassword = (pwd) => {
        return pwd.length >= 8 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /[0-9]/.test(pwd);
    }

    const handleSumbit = async (e) => { //to prevent refresh page when submit button is clicked
        e.preventDefault()
        if (!isValidPassword(password)) {
            setPasswordError("Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number.")
            return
        }
       await handleRegister({username, email, password})
        navigate('/')
    }
     if(loading){
        return <Spinner />
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
                 onChange={(e)=>{
                     const newPwd = e.target.value;
                     setPassword(newPwd);
                     if (passwordError && isValidPassword(newPwd)) {
                         setPasswordError("");
                     }
                 }}
                type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>
            {passwordError && <span style={{ color: '#ff4d4d', fontSize: '0.8rem', display: 'block', marginTop: '-0.5rem', marginBottom: '1rem' }}>{passwordError}</span>}

            <button className="button primary">Submit</button>
        </form>
        <p className='login-link'>Already have an account? <Link to="/login">Login</Link></p>
   </main>
  )
}

export default Register