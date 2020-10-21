import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return(
		<div>
			<p className='f3'>
			 	{'Magic face detection'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-1'>	
					<input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
					<button className='near-black w-30 grow f4 link ph3 br2 b--light-red pv dib bg-light-red' onClick={onButtonSubmit}>DETECT</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;