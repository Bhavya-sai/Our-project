import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Login()
{
    return(
        <div className='login-Form'>
        <div className="container">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='UserName' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">forgot password?</a>
          </div>
          <button type='submit' className='btn'> Login </button>
          <div className="register-link">
          <p>Don't have an account ? <Link to="/register">Register</Link></p>
            
          </div>

        </form>
    </div>
    </div>
    )

}

export default Login;