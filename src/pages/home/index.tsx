import React from 'react';
import { Background } from '../../global/styles';
import Tasks from '../tasks';
import BottomMenu from '../../components/BottomMenuSlider';

const Home: React.FC = () => {
	return (
		<>
			<Background>
				<Tasks/>
			</Background>
			<BottomMenu/>
		</>
	);
};

export default Home;
