// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': ['error', 'windows'],
		'no-mixed-spaces-and-tabs': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
