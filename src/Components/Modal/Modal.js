import React, {useState} from 'react';
import './Modal.css';


const Modal = ({project, active}) => {
	const [title, setTitle] = useState('');

	const onTitleChange = (event) => {
		setTitle(event.target.value);
	}

	const onAcceptTitle = () => {
		project.title = title;
		active(false);
	}

	const onCancelTitle = () => {
		active(false);
	}

	return (
			<div 
				className='add-title-container'
			>
				<div className='add-title' id='addTitle'>
					<label>Enter your project title below:</label>
					<input 
						onChange={onTitleChange}
						id='title-holder'
						value={title} 
					/>
					<div className='buttons'>
						<div 
							onClick={onAcceptTitle}
							className='button grow'
						>OK</div>
						<div 
							onClick={onCancelTitle}
							className='button grow'
						>CANCEL</div>
					</div>
				</div>
			</div>
	);
}

export default Modal;