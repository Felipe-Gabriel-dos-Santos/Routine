import {DefaultTheme} from 'styled-components/native';

const light: DefaultTheme = {
	colors: {
		backgroundColor: {
			primary: '#f3f2f7',
			secondary: '#e6e5ea',
			tertiary: '#d2d1d6',
		},
		fontColor: {
			primary: '#1c1c1e',
			secondary: '#989898',
		},
		alertColor: {
			success: '#34c85a',
			danger: '#ffcc00',
			error: '#ff3b2f',
		},

		deleteColor: '#ff3b2f',
	},
};

const dark: DefaultTheme = {
	colors: {
		backgroundColor: {
			primary: '#1c1c1e',
			secondary: '#2c2c2e',
			tertiary: '#3a3a3c',
		},
		fontColor: {
			primary: '#ffffff',
			secondary: '#8e8d92',
		},
		alertColor: {
			success: '#2fd159',
			danger: '#ffd60a',
			error: '#ff4539',
		},

		deleteColor: '#ff4539',
	},
};

export default {light, dark};
