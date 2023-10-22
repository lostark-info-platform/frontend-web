module.exports = {
	// https://github.com/miriyas/miriya/blob/main/.eslintrc.json
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'prettier', '@tanstack/query'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
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
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-unused-vars': ['error'],
		'prefer-const': 'error',
		'react/react-in-jsx-scope': 'off',
		'no-empty-function': 'off',
		'no-unused-vars': 'off',
		'no-var': 'error',
		'no-self-assign': 'error',
		'array-bracket-newline': 'error',
		'object-property-newline': 'error',
		'lines-between-class-members': 'error',
		'arrow-parens': 'error',
		semi: 'off',
		'no-useless-escape': 'off',
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/stable-query-client': 'error',
	},
};
