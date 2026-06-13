import react from 'react'
import {useNavigate, Link} from "react-router"

const Register = () => {

    const navigate = useNavigate() //to navigate to login page when user clicks on login button

    const handleSumbit = (e) => { //to prevent refresh page when submit button is clicked
        e.preventDefault()
    }

  return (
   <main>
        <div className="form">
            
        </div>

        <form onSubmit={handleSumbit}>
             <h1>Register</h1>
            <div className="input-group">
                <label htmlFor = "Username">Username</label>
                <input type="text" id="Username" name="Username" placeholder="Enter your username"/>
            </div>

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
        <p className='login-link'>Already have an account? <Link to="/login">Login</Link></p>
   </main>
  )
}

export default Register