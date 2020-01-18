// Problem      : Anagram Algorithm
// Description  : An anagram is the result of two strings containing the same characters and
//                same amount of characters.
// Rules        : The strings will not be case sensitive, punctuations and spaces will be excluded.

function isAnagram(stringOne, stringTwo) {
    const stringOneProps = Object.getOwnPropertyNames(stringToMapHelper(stringOne));
    const stringTwoProps = Object.getOwnPropertyNames(stringToMapHelper(stringTwo));

    if(stringOneProps.length != stringTwoProps.length) {
        return false;
    }

    for(let key of stringTwoProps) {
        if(stringOneProps[key] != stringTwoProps[key]) {
            return false;
        }
    }

    return true;
}

function anagramRegExpHelper(string) {
    return string.replace(/[^\w]/g, "");
}

function stringToMapHelper(string) {
    const stringMap = {};
    string = anagramRegExpHelper(string);
    for(let char of string) {
        stringMap[char] = stringMap[char] + 1 || 1;
    }

    return stringMap;
}

module.exports = isAnagram;