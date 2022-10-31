/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			merri: ["Merriweather", "serif"],
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				main: "#EEECEA",
				mainSh: "E0DDD9",
				darkRed: "#6A2E0A",
				secRed: "#762E0C",
				lemon: "#D7B34C",
				rusty: "#BB4314",
				darkGreen: "#606E6B",
			},
		},
	},
	plugins: [],
};
