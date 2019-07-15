import * as tokens from '.';

describe('tokens lib', () => {
    it('should contain correct tokens', () => {
        expect(Object.keys(tokens)).toEqual(['colours', 'coloursByFunction']);
    });
});
