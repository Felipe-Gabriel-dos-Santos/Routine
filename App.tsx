import React from 'react';
import { StatusBar } from 'expo-status-bar';
import theme from './src/global/themes/theme';
import {ColorPatterns} from './src/@types/styles/color_patterns';

import {ThemeProvider} from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/pages/home';

const App: React.FC = () => {
	const ColorScheme: ColorPatterns = 'dark';

	const Theme = theme[ColorScheme];

	return (
	
		<GestureHandlerRootView style={{flex: 1}}>
			<ThemeProvider theme={Theme}>
				<StatusBar
					animated
					translucent={false}
					backgroundColor={Theme.colors.backgroundColor.primary}
				/>
				<Home />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
};

export default App;
