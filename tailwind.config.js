/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	], theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: "#F39C3F",
				secondary: "#FFFFFF",
				tertiary: "#FBE1C6",
			}
		},
	},
	plugins: [],
}

