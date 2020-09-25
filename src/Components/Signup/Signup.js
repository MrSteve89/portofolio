import React from 'react';
import '../Login/Login.css';

const Signup = ({selectPath}) => {
	return (
		<div>
		    <div className="login-box">
			  <h2 id='signup'>Sign Up</h2>
			  <form>
			    <div className="user-box">
			      <label>Username</label>
			      <input type="text" name="" required=""/>
			    </div>
			    <div className="user-box">
			      <label>Email</label>
			      <input type="email" name="" required=""/>
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
			      Sign Up
			    </div>
			    <div 
			    	onClick={()=>selectPath('login')}
			    	className='signup grow' 
			    >
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Login
			    </div>
			  </form>
			</div>
		</div>    
	);
}

export default Signup;