import React from 'react';

const Rank = ({name ,entries}) => {
	return(
		<div>
			<div className='near-black f3'>
				{`${name}, your current number of pfaces detected is:`}
			</div>
			<div className='near-black f1'>
				{entries}
			</div>
		</div>	
	);
}

export default Rank;