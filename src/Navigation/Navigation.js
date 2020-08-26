import React from 'react';
// import '../Login/Login.css';
import './Navigation.css';

const Navigation = () => {
	return(
		<div className='shadow-2 logout'>
			<a className='grow' id='signup' href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Sign up
			</a>
			<a className='grow' href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Logout
			</a>
		</div>	
	);
}

export default Navigation;