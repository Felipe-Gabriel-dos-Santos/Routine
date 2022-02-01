import React from 'react';
import theme from './theme';
import { ColorPatterns } from '../../@types/styles/color_patterns';
import { View } from 'react-native';

const ColorScheme: ColorPatterns = 'light';

export const Theme = theme[ColorScheme];


const toggleTheme: React.FC = () => {


	return (
		<View>
      
		</View>
	);
};

export default toggleTheme;



