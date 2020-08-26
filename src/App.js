import React from 'react';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Title from './Title/Title';
import Project from './Project/Project';
import Project2 from './Project2/Project2';
import './App.css';


function App() {
  return (
    <div>
    	<Navigation />
    	<Title />
    	<Project />
    	<Project2/>
    	<Project />
    	<Project2/>

    </div>
  );
}

export default App;
