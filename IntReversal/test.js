// Tests for reverse int
const reverseInt = require('./index');

test('Reverses int 51 to 15', () => {
    expect(reverseInt(51)).toBe(15);
});