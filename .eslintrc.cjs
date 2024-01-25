module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        React: true,
        JSX: true,
        EventListener: true,
        MutationObserverInit: true,
        VoidFunction: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['./**/**/*.ts', './**/**/*.tsx'],
            rules: {
                'no-use-before-define': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                '@typescript-eslint/no-unused-vars': ['error'],
            },
        }
    ],
    extends: ['plugin:react/recommended', 'standard', 'prettier', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        'no-unneeded-ternary': ['error'],
        indent: ['error', 2],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        camelcase: 'off',
        'n/handle-callback-err': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|components)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'eol-last': ["error", "always"],
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "no-multiple-empty-lines": [1, {"max": 1, "maxEOF": 0}]
    },
}
