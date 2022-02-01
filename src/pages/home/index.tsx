import React from 'react';
import { Background } from '../../global/styles';
import BottomMenuSlider from '../../components/BottomMenuSlider';
import Tasks from '../tasks';

const Home: React.FC = () => {
	return (
		<>
			<Background>
				<Tasks/>
			</Background>
			<BottomMenuSlider/>
		</>
	);
};

export default Home;
