import React, {useState} from 'react';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Title from './Title/Title';
import ProjectList from './ProjectList/ProjectList';
import './App.css';


const App = () => {

	const [path, setPath] = useState('home');

	const selectPath = (path) => {
		setPath(path);
	}

	return (
	    <div>
	    {path === 'home' 
	    ?
	    <div>
	    	<Navigation selectPath={selectPath}/>
	    	<Title />
		    <ProjectList />	
	    </div>
	    : (
	    	path === 'login' 
	    	?
	    	<Login selectPath={selectPath}/>
	    	:
	    	<Signup selectPath={selectPath}/>
	    	)
	    }
	    </div>
	);
}

export default App;
