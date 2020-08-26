import React from 'react';
import './Login.css';

const Login = () => {
	return (
		<div>
		    <div className="login-box">
			  <h2 id='login'>Login</h2>
			  <form>
			    <div className="user-box">
			      <input type="text" name="" required=""/>
			      <label>Username</label>
			    </div>
			    <div className="user-box">
			      <input type="password" name="" required=""/>
			      <label>Password</label>
			    </div>
			    <a className='grow' href="#">
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Login
			    </a>
			    <a className='signup grow' href="#">
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Sign Up
			    </a>
			  </form>
			</div>
		</div>    
	);
}

export default Login;