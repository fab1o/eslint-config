describe('Eslint config packages', () => {
    it('expect eslint-config-base to exist', () => {
        expect(() => {
            require('../packages/eslint-config-base');
            require('../packages/eslint-config-base/all');
        }).not.toThrow();
    });
    it('expect eslint-config-babel to exist', () => {
        expect(() => {
            require('../packages/eslint-config-babel');
            require('../packages/eslint-config-babel/all');
        }).not.toThrow();
    });
    it('expect eslint-config-typescript to exist', () => {
        expect(() => {
            require('../packages/eslint-config-typescript');
            require('../packages/eslint-config-typescript/all');
        }).not.toThrow();
    });
    it('expect eslint-config-react to exist', () => {
        expect(() => {
            require('../packages/eslint-config-react');
            require('../packages/eslint-config-react/all');
        }).not.toThrow();
    });
    it('expect eslint-config-vue to exist', () => {
        expect(() => {
            require('../packages/eslint-config-vue');
            require('../packages/eslint-config-vue/all');
        }).not.toThrow();
    });
});
