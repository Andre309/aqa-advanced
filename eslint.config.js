import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			curly: 'error',
			quotes: ['error', 'single'],
      'no-console': 'off',
			'no-unused-vars': 'off',
      'no-constant-condition': 'warn',
      'no-prototype-builtins': 'off'
		},
	},
];
