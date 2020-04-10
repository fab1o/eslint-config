// jsdoc

module.exports = {
    plugins: ['require-jsdoc-except'],
    rules: {
        'require-jsdoc-except/require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration: false,
                    MethodDefinition: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                },
                ignore: ['toString', 'constructor']
            }
        ]
    }
};
