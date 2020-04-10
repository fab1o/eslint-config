describe('eslint config packages', () => {
    it('expect all to exist', () => {
        expect(() => {
            require('../packages/eslint-config-base');
            require('../packages/eslint-config-base/all');
            require('../packages/eslint-config-babel');
            require('../packages/eslint-config-babel/all');
            require('../packages/eslint-config-react');
            require('../packages/eslint-config-react/all');
            require('../packages/eslint-config-typescript');
            require('../packages/eslint-config-typescript/all');
        }).not.toThrow();
    });
});
