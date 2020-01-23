const capitalize = require('./index');

test('Take in string "hello there" and capitalize the first letter', () => {
    expect(capitalize('hello there')).toBe('Hello There')
});

test('Take in string "what is up there" and capitalize the first letter', () => {
    expect(capitalize('what is up there')).toBe('What Is Up There')
});