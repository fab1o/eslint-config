// jsdoc

module.exports = {
    plugins: ['jsdoc', 'require-jsdoc-except'],
    extends: ['plugin:jsdoc/recommended'],
    rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['note']
            }
        ],
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-param-description': 'off',

        'require-jsdoc-except/require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration: false,
                    MethodDefinition: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                    ClassDeclaration: false,
                    ClassExpression: false
                },
                ignore: ['toString', 'constructor']
            }
        ]
    },
    settings: {
        jsdoc: {
            preferredTypes: {
                boolean: 'Boolean',
                string: 'String',
                object: 'Object',
                number: 'Number',
                array: 'Array'
            },
            tagNamePreference: {
                return: 'returns',
                description: 'desc',
                augments: 'extends'
            },
            augmentsExtendsReplacesDocs: true
        }
    }
};
