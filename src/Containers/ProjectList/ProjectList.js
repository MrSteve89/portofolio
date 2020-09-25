import React, {useState} from 'react';
import AddProject from '../../Components/AddProject/AddProject';
import Project from '../Project/Project';
import './ProjectList.css';

const ProjectList = () => {

	const [projectList, setProjectList] = useState([]);


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
							setProjectList={setProjectList}
						/>			
				)}
			</div>
		</div>	
	);
}

export default ProjectList;