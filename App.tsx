import React from 'react';
import {StatusBar} from 'react-native';
import theme from './src/global/themes/theme';
import {ColorPatterns} from './src/@types/styles/color_patterns';

import {ThemeProvider} from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/pages/home';

const App: React.FC = () => {
  const ColorScheme: ColorPatterns = 'dark';
  const Theme = theme[ColorScheme];

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={Theme}>
        <StatusBar
          translucent={false}
          backgroundColor={Theme.colors.backgroundColor.primary}
        />
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
