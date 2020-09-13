import React, {useState} from 'react';
import AddProject from '../AddProject/AddProject';
import Project from '../Project/Project';
import './ProjectList.css';

const ProjectList = () => {

	const [projectList, setProjectList] = useState([]);

	


	const onRemoveProject = (id) => {
		const newList = projectList.filter(project => project.id !== id);
		setProjectList(newList);
	}
	
	return (
		<div>
			<AddProject 
				projectList={projectList}
				setProjectList={setProjectList}
			/>
			<div className='project-list'>
				{projectList.map(project =>
						<Project 
							project={project}
							projectList={projectList}
						/>			
				)}
			</div>
		</div>	
	);
}

export default ProjectList;