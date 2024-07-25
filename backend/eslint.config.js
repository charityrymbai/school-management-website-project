import globals from 'globals';
import { default as eslintJs } from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

const { eslintRecommended } = eslintJs;

const baseConfig = {
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: { jsx: false },
        },
        globals: globals.browser,
    },
    plugins: {
        prettier: pluginPrettier,
    },
    rules: {
        'prettier/prettier': 'error',
        semi: ['error', 'always'],
    },
};

export default {
    files: ['**/*.{js,mjs,cjs}'],
    ...baseConfig,
    ...eslintRecommended,
    ...configPrettier,
};
