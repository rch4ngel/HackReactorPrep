const maxChar = require('./index');

test('Check string apple and return p as the max char', () => {
    expect(maxChar('apple')).toBe('p')
});

test('Check string 1111222222233 Hellllllllo and return l as the max char', () => {
    expect(maxChar('1111222222233 Hellllllllo')).toBe('l');
});