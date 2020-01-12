// SOLUTION 1
// To begin this will be a simple string reversal function. This function will split the string into an
// array, reverse it then join it back into a string.

function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// SOLUTION 2

function reverseTwo(str) {
    let stringArray = str.split('');
    let reverseArray = [];

    for(let i = stringArray.length; i >= 0; i--) {
        reverseArray.push(stringArray[i]);
    }

    return reverseArray.join('')
}

// SOLUTION 3

function reverseThree(str) {
    let reversed = '';

    // This looks a little tricky but a great technique.
    // reversed starts out as ''
    // Loop one:
    //  reversed = ''
    //  character = H
    //  reversed = H + ''
    //  reversed = H
    // Loop two:
    //  reversed = 'H'
    //  character = a
    //  reversed = a + H
    //  reversed = aH
    // etc ...
    for(let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

// SOLUTION 4
// function reverseFour(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '')
// }

// Here the
function reverseFour(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev)
}

reverseFour("Jubei Kibagami");

module.exports = [reverse, reverseTwo, reverseThree, reverseFour];