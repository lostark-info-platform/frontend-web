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
	overrides: [
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
		'prefer-const': 'error',
		'react/react-in-jsx-scope': 'off',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'no-var': 'error',
		'no-self-assign': 'error',
		'array-bracket-newline': 'error',
		'object-property-newline': 'error',
		'lines-between-class-members': 'error',
		'arrow-parens': 'error',
		semi: 'off',
		'no-useless-escape': 'off',
	},
};
