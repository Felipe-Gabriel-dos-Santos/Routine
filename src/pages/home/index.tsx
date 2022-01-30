import React from 'react';
import { Background } from '../../global/styles';
import Tasks from '../tasks';

const Home: React.FC = () => {
	return (
		<Background>
			<Tasks/>
		</Background>
	);
};

export default Home;
