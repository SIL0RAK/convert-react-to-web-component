import getAsPascalCase from '../getAsPascalCase';

test.each([
    ['kebab-case', 'kebabCase'],
    ['string', 'string'],
    ['pascalCase', 'pascalCase'],
])('%s should be converted to %s', (string, expected) => {
    expect(getAsPascalCase(string)).toBe(expected);
})