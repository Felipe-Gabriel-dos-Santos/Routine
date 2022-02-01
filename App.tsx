import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Theme } from './src/global/themes/toggleTheme';
import {ThemeProvider} from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/pages/home';

const App: React.FC = () => {

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
