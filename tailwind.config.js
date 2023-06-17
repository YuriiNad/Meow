/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.html',
		'./src/**/*.ts',
	],
	theme: {
		colors: {
			...colors,
			'transparent': 'transparent',
			'inherit-color': 'inherit',
		},
		screens: {
		},
		extend: {
		},
		fontFamily: {
		}
	},
	plugins: [],
}

