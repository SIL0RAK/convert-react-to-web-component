import getAsSnakeCase from '../getAsSnakeCase';

test.each([
    ['ReactComponent', 'react-component'],
    ['App', 'app'],
    ['webpart', 'webpart'],
])('%s should be converted to %s', (original, expected) => {
    expect(getAsSnakeCase(original)).toBe(expected);
})