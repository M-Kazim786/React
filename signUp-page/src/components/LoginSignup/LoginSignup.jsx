import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

function LoginSignup() {

    const[action,setAction] = useState("Login")
    return (
      <div className='container'>
        <div className='header'>
          <div className='text'>
            {action}
          </div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
            {action==="Login"? <div></div>:<div className='input'>
            <img src={user_icon} alt="User icon" />
            <input type="text" placeholder="Username" aria-label="Username" />
          </div>}

          <div className='input'>
            <img src={email_icon} alt="Email icon" />
            <input type="email" placeholder="Email" aria-label="Email" />
          </div>
          <div className='input'>
            <img src={password_icon} alt="Password icon" />
            <input type="password" placeholder="Password" aria-label="Password" />
          </div>
        </div>

        {action==="Sign Up"? <div></div>:   <div className="forgot-password">Lost password? <span>Click here</span></div>}

        <div className='submit-container'>
          <button className={action==="Login"?"submit gray":"submit"}
          onClick={()=>{
            setAction("Sign Up")
          }}
          >Sign Up</button>
          <button className={action==="Sign Up"?"submit gray":"submit"}
          onClick={()=>{
            setAction("Login")
          }}
          >Login</button>
        </div>
      </div>
    )
  }

export default LoginSignup