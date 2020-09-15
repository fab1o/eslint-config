// .prettierrc config

module.exports = {
    singleQuote: true,
    tabWidth: 4,
    overrides: [
        {
            files: ['**/*.json'],
            options: {
                tabWidth: 2
            }
        }
    ],
    printWidth: 120,
    trailingComma: 'none'
};
