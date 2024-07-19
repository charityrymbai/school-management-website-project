import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs}'] },
    {
        languageOptions: {
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    configPrettier,
    {
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];
