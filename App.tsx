import React from 'react';
import {StatusBar} from 'react-native';
import theme from './src/global/themes/theme';
import {ColorPatterns} from './src/@types/styles/color_patterns';

import {ThemeProvider} from 'styled-components/native';
import Home from './src/pages/home';

const App: React.FC = () => {
  const ColorScheme: ColorPatterns = 'dark';
  const Theme = theme[ColorScheme];

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        translucent={false}
        backgroundColor={Theme.colors.backgroundColor.primary}
      />

      <Home />
    </ThemeProvider>
  );
};

export default App;
