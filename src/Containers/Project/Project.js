import React, {useState} from 'react';
import Modal from '../../Components/Modal/Modal';
import './Project.css';

const Project = ({project, projectList, setProjectList}) => {
	const [displayMenu, setdisplayMenu] = useState(false); 
	const [displayModal, setdisplayModal] = useState(false);
	const [src, setSRC] = useState(project.src);
	const [isTitle, setIsTitle] = useState(false);

	//toggle menu
	const onMenuToggle = () => {
		setdisplayMenu(displayMenu === false);
	}

	//close menu whne user click outside the menu 
	// window.onclick = (event) => {
	// 		let menu = document.querySelector('.project-menu');
	// 		if (event.target == menu) {
	// 			setdisplayMenu(displayMenu === false);
	// 		}
	// }

	//add Image
	const onSelectImage = () => {
		let input = document.createElement('input');
		input.type = 'file';

		input.onchange = e => { 
		   // getting a hold of the file reference
		   let file = e.target.files[0]; 

		   // setting up the reader
		   let reader = new FileReader();
		   reader.readAsDataURL(file); // this is reading as data url

		   // here we tell the reader what to do when it's done reading...
		   reader.onload = readerEvent => {
			 // this is the content!
		      setSRC(readerEvent.target.result);
		      project.src = src;
		   }
		}
		input.click();
	}

	//add Title
	const onAddTitle = () => {
		setdisplayModal(true);
		setIsTitle(true);
	}

	const onChangeTitleColor = () => {
		let input = document.createElement('input');
		input.type = 'color';

		input.onchange = e => { 
		   document.querySelector('.project-title').style.color = e.target.value;
		}   
	}



	//delete Project
	const onRemoveProject = (id) => {
		const newList = projectList.filter(project => project.id !== id);
		setProjectList(newList);
	}

	return(
		<div className="shadow-2 project">
			<img 
				className='thumbnail' 
				src={src}
			/>
			{isTitle && 
				<div
					onClick={onChangeTitleColor} 
					className='project-title'
				>
				{project.title}
			</div>}
			<div 
				onClick={onMenuToggle}
				className='project-menu'
			>&#10097;</div>
			{displayMenu && <div
				className='project-menu-list' 
			>
				<div onClick={onSelectImage}>Add Image</div>
				<div onClick={onAddTitle}>Add Title</div>
				<div onClick={()=>onRemoveProject(project.id)}>Delete</div>
			</div>}
			{displayModal && <Modal 
				project={project}
				active={modal => setdisplayModal(modal)}
			/>}
		</div>
	);
}

export default Project;