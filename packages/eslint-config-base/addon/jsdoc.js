// jsdoc

module.exports = {
    plugins: ['jsdoc', 'require-jsdoc-except'],
    extends: ['plugin:jsdoc/recommended'],
    rules: {
        // ensure JSDoc comments are valid
        // https://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': [
            'warn',
            {
                prefer: {
                    return: 'returns'
                },
                preferType: {
                    object: 'Object',
                    number: 'Number',
                    array: 'Array',
                    function: 'Function',
                    string: 'String',
                    integer: 'Number',
                    Integer: 'Number',
                    Null: 'null',
                    Void: 'undefined',
                    void: 'undefined',
                    Undefined: 'undefined',
                    boolean: 'Boolean',
                    bool: 'Boolean',
                    Decimal: 'Number',
                    decimal: 'Number',
                    double: 'Number',
                    Double: 'Number',
                    error: 'Error',
                    date: 'Date'
                },
                requireReturn: false,
                requireReturnType: true,
                requireParamType: true,
                requireReturnDescription: false,
                requireParamDescription: false
            }
        ],
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
