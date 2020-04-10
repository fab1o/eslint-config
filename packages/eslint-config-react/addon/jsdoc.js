// jsdoc

module.exports = {
    extends: '@fab1o/eslint-config-base/addon/jsdoc',
    rules: {
        'require-jsdoc-except/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                },
                ignore: [
                    'toString',
                    'constructor',
                    'UNSAFE_componentWillMount',
                    'componentWillMount',
                    'render',
                    'UNSAFE_componentDidMount',
                    'componentDidMount',
                    'shouldComponentUpdate',
                    'UNSAFE_componentWillUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillReceiveProps',
                    'componentWillReceiveProps',
                    'componentWillUnmount',
                    'componentDidCatch',
                    'componentDidUpdate'
                ]
            }
        ]
    }
};
