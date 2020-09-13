import React from 'react';
import '../App.css';

const Delete = ({onRemoveProject, project}) => {
	return (
		<div>
			<div 
				onClick={() => onRemoveProject(project.id)}
				className="remove-project grow shadow-2 center"
				id = 'red'
			>DELETE</div>
		</div>
	);
}

export default Delete;