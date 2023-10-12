module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
	],
	settings: {
		'mdx/code-blocks': true,
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		/*
		 * @description eslint mdx
		 * https://github.com/mdx-js/eslint-mdx/issues/230
		 */
		{
			files: '*.mdx',
			extends: 'plugin:mdx/recommended',
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-var': 'error',
		'prefer-const': 'error',
	},
};
