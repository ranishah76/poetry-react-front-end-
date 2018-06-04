import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = props => {
	console.log(props)
	const results = props.data.slice(0, 6);
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img => <Img url={img.urls.small} key={img.id} />);
	} else {
		imgs = <NoPoems />;
	}
	return (
		<div className="img-list">
			{imgs}
		</div>
	);
};

export default ImgList;
