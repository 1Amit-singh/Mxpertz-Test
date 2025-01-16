/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"btn-blue": "#1C84FF",
				"btn-yellow": "#FFBF1A",
				"btn-green": "#1AFF5A",
				"bg-gradient-1": "#0E0521",
				"bg-gradient-2": "#1F173F",
				"bg-gradient-3": "#0D051F",
				"cards-gradient-1": "#5B26C0",
				"cards-gradient-2": "#269AC6",
				"passive-color": "#2E2F4C",
			},
		},
	},
	plugins: [],
};
