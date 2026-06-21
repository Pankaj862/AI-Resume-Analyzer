import react, { useState } from 'react'
import "../auth.form.scss"
import {useNavigate, Link} from "react-router"
import { useAuth } from '../hooks/useAuth'
import Spinner from '../../../components/Loaders/Spinner'


const Login = () => {

    const navigate = useNavigate()
    const {loading, handleLogin} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSumbit = async(e) => { //to prevent refresh page when submit button is clicked
        e.preventDefault()
    await handleLogin({email, password})
        navigate('/home')
    }

    if(loading){
        return <Spinner />
    }

  return (
   <main>
        <div className="form">
            <h1>Login</h1> 
        </div>

        <form onSubmit={handleSumbit}>
            <div className="input-group">
                <label htmlFor = "email">Email</label>
                <input 
                onChange={(e)=> {setEmail(e.target.value)}}
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

         <p className='login-link'>Don't have an account? <Link to="/register">Register</Link></p>
   </main>
  )
}

export default Login