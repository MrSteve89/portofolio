import React from 'react';
import './AddProject.css';

const AddProject = ({projectList, setProjectList}) => {

	const onAddProject = () => {
		setProjectList([
			...projectList,
			{
				id: projectList.length,
				src: require('./tree.jpg'),
				title: ''
			}
		]);
	}


	return (
		<div>
			<h2 className='add-project-title'>Click the button below to add a NEW Project:</h2>
			<div 
				onClick={onAddProject}
				className="add-project-button grow shadow-2 center"
			>&#10010;</div>
		</div>
	);
}

export default AddProject;