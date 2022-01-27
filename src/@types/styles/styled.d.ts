import 'styled-components/native';

interface IBackground {
  primary: string;
  secondary: string;
  tertiary: string;
}

interface IFont {
  primary: string;
  secondary: string;
}

interface IAlert {
  success: string;
  danger: string;
  error: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: IBackground;
      fontColor: IFont;
      alertColor: IAlert;
    };
  }
}
