import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Res()
{
    return(
        <div className='register-form'>
            <div className="container">
            <h1> Register </h1>
            <div className="input-box">
            <FaUser className='icon' />
                <input type="text" placeholder='Name' required/>
                
            </div>
            <div className="input-box">
                <input type="text" placeholder='email' required/>
                <IoMdMail className='icon' />
            </div>
            <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <button type='submit' className='btn'>Register</button>
        </div>
        </div>
    )
}

export default Res;