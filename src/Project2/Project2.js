import React from 'react';
import Tilt from 'react-tilt'
import '../Project/Project.css';

const Project2 = () => {
	return(
		<div className=' grow container'>
			<div className='br2 shadow-2 description'>
			 	asdas asda sds ad adas sad asd asdd			
			</div>
			<Tilt className="Tilt br2 shadow-2 project-thumbnail" options={{ max : 55 }}>
				<div className="Tilt-inner pa3"><img className='br2 shadow-2' src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612' alt=''/></div>
			</Tilt>
		</div>	
	);
}

export default Project2;