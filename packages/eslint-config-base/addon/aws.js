// aws

module.exports = {
    extends: './node',
    rules: {
        // enforces 'use strict'
        // https://eslint.org/docs/rules/strict
        strict: ['error', 'global'],

        // allows the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': 'off',

        // allows use of console
        'no-console': 'off',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
        'node/no-unpublished-require': [
            'error',
            {
                allowModules: ['aws-sdk'],
                convertPath: {
                    'src/**/*.jsx': ['^src/(.+?)\\.jsx$', 'dist/$1.js']
                },
                tryExtensions: ['.js', '.jsx', '.json', '.node']
            }
        ]
    }
};
