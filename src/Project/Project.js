import React, {useState} from 'react';
import Delete from '../Delete/Delete';
import Modal from '../Modal/Modal';
import Tilt from 'react-tilt';
import './Project.css';

const Project = ({project, projectList}) => {
	const [displayMenu, setdisplayMenu] = useState(false); 
	const [displayModal, setdisplayModal] = useState(false);
	let titleHolder;
	

	//toggle menu
	const onMenuToggle = () => {
		if (displayMenu === false) {
			setdisplayMenu(true);
		} else {
			setdisplayMenu(false);
		}
	}

	//add Image
	const onImageUpload = (event) => {
		project.src = URL.createObjectURL(event.target.files[0]);
	}

	//add Title
	const onAddTitle = () => {
		setdisplayModal(true);
		titleHolder = '';
	}

	return(
		<div className="shadow-2 project">
			<img 
				className='thumbnail' 
				src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
				alt='' 
			/>
			<div className='project-title'>
				{project.title}
			</div>
			<div 
				onClick={onMenuToggle}
				className='project-menu'
			>&#10097;</div>
			{displayMenu && <div
				className='project-menu-list' 
			>
				<div>Add Image</div>
				<div onClick={onAddTitle}>Add Title</div>
				<div>Delete</div>
			</div>}
			{displayModal && <Modal 
				project={project}
				active={modal => setdisplayModal(modal)}
				titleHolder={titleHolder}
			/>}
		</div>
	);
}

export default Project;