import React from 'react';
import './AddProject.css';

const AddProject = ({projectList, setProjectList}) => {

	const onAddProject = () => {
		setProjectList([
			...projectList,
			{
				id: projectList.length,
				src: '',
				title: ''
			}
		]);
	}


	return (
		<div>
			<div 
				onClick={onAddProject}
				className="add-project grow shadow-2 center"
				id = 'blue'
			>&#10010;</div>
		</div>
	);
}

export default AddProject;