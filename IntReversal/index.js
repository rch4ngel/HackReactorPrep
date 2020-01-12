// Int Reversal
// Given an integer reverse the order

function reverseInt(int) {

    return parseInt(int
        .toString()
        .split('')
        .reduce((rev, char) => char + rev));
}

module.exports = reverseInt;