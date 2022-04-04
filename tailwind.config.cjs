module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			main1: '#353535',
			main2: '#666666'
		}
	},
	plugins: [require('daisyui')]
};
