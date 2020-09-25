import React from 'react';
import './Login.css';

const Login = ({selectPath}) => {
	return (
		<div>
		    <div className="login-box">
			  <h2 id='login'>Login</h2>
			  <form>
			    <div className="user-box">
			      <label>Username</label>
			      <input type="text" name="" required=""/>
			    </div>
			    <div className="user-box">
			      <label>Password</label>
			      <input type="password" name="" required=""/>
			    </div>
			    <div 
			    	onClick={()=>selectPath('home')}
			    	className='login grow' 
			    >
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Login
			    </div>
			    <div
			    	onClick={()=>selectPath('signup')}
			    	className='signup grow' 
			    >
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Sign Up
			    </div>
			  </form>
			</div>
		</div>    
	);
}

export default Login;