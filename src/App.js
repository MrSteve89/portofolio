import React, {useState} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Title from './Components/Title/Title';
import ProjectList from './Containers/ProjectList/ProjectList';
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
