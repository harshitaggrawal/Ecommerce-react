import React from 'react'
import './CSS/LoginSignup.css';
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' name="" id="" />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an Account <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Clicking, I Agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
