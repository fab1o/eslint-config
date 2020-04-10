module.exports = {
    singleQuote: true,
    arrowParens: 'always',
    tabWidth: 4,
    overrides: [
        {
            files: ['**/*.json'],
            options: {
                tabWidth: 2
            }
        }
    ],
    printWidth: 100
};
