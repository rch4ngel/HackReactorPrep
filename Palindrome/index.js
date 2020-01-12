// This shows the implementation of showing if a string is
// a palindrome or not.
// A palindrome is a word that when reversed forms the same word.


// SOLUTION 1
// -----------------------------------------------------------------------------
// First we will reverse the string so that we can compare it to the original
// string.
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev )
}

console.log(reverse('minute'));

// The isPalindrome function returns a bool if the string is
// a palindrome or not.
function isPalidrome(str) {
    return str === reverse(str);
}

// SOLUTION 2
// This solution is not optimal since it checks twice and many elements as needed.
// ----------------------------------------------------------------------------
function isPalindromeTwo(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -i - 1]
    });
}

module.exports = [reverse, isPalidrome, isPalindromeTwo];