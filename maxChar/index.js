// For maxChar we will find the char that occurs the most!

function charCount(str) {
    let chars = {};
    for(let char of str) {
        // if(!chars[char]) {
        //     chars[char] = 1
        // } else {
        //     chars[char]++
        // }
        chars[char] = chars[char] + 1 || 1
    }
    return chars
}


function maxChar(str) {
    let charCounts = Object.entries(charCount(str));
    let max = 0;
    let maxChar = '';

    for(let i in charCounts) {
        if(charCounts[i][1] > max) {
            max = charCounts[i][1];
            maxChar = charCounts[i][0]
        }
    }

    return maxChar;
}

module.exports = maxChar;