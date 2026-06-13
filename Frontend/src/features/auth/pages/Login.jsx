import react from 'react'
import "../auth.form.scss"
import {useNavigate, Link} from "react-router"

const Login = () => {

    const navigate = useNavigate()

    const handleSumbit = (e) => { //to prevent refresh page when submit button is clicked
        e.preventDefault()
    }

  return (
   <main>
        <div className="form">
            <h1>Login</h1> 
        </div>

        <form onSubmit={handleSumbit}>
            <div className="input-group">
                <label htmlFor = "email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"/>
            </div>

             <div className="input-group">
                <label htmlFor = "password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>

            <button className="button primary">Submit</button>
        </form>

         <p className='login-link'>Don't have an account? <Link to="/register">Register</Link></p>
   </main>
  )
}

export default Login