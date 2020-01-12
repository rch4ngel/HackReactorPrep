const [reverse, isPalindrome, isPalindromeTwo] = require('./index');

// Reverse Tests
test('Reverse string dad to equal dad', () => {
    expect(reverse('dad')).toBe('dad');
});

test('Reverse string minute to etunim', () => {
    expect(reverse('minute')).toBe('etunim');
});

test('Reverse string rotator to equal rotator', () => {
    expect(reverse('rotator')).toBe('rotator');
});

// Palindrome Tests
test('Check if string dad is palindrome', () => {
    expect(isPalindrome('dad')).toBe(true);
});

test('Check if string minute is palindrome', () => {
    expect(isPalindrome('minute')).toBe(false);
});

test('Check if string rotator is palindrome', () => {
    expect(isPalindrome('rotator')).toBe(true);
});


// PalindromeTwo Tests
test('Check if string dad is palindrome', () => {
    expect(isPalindromeTwo('dad')).toBe(true);
});

test('Check if string minute is palindrome', () => {
    expect(isPalindromeTwo('minute')).toBe(false);
});

test('Check if string rotator is palindrome', () => {
    expect(isPalindromeTwo('rotator')).toBe(true);
});