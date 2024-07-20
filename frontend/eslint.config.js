import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: globals.browser,
        },
        plugins: {
            react: pluginReactConfig,
            'react-hooks': pluginReactHooks,
            'jsx-a11y': pluginJsxA11y,
            import: pluginImport,
            prettier: pluginPrettier,
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'airbnb',
            'plugin:prettier/recommended',
        ],
        rules: {
            'prettier/prettier': 'error',
            'import/no-unresolved': 'off',
        },
    },
];
