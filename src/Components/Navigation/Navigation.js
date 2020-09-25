import React from 'react';
import './Navigation.css';

const Navigation = ({selectPath}) => {
	return(
		<div className='shadow-2 logout'>
			<div 
				onClick={()=>selectPath('signup')}
				className='grow' 
				id='signup' 
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Sign up
			</div>
			<div 
				onClick={()=>selectPath('login')}
				className='grow' 
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Logout
			</div>
		</div>	
	);
}

export default Navigation;