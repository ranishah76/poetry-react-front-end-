import React from 'react';
import Poem from './Poem';
import NoPoems from './NoPoems';

const PoemList = props => {
	const results = props.poems.slice(0, 6);
	let poems;
	if (results.length > 0) {
		poems = results.map(poem => <Poem {...poem} key={poem.id} />);
	} else {
		poems = <NoPoems />;
	}
	return (
		<div className="img-list">
			{poems}
		</div>
	);
};

export default PoemList;
