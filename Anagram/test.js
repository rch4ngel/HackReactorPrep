const isAnagram = require('./index');

test("Compare string 'Fairy Tales' and 'Rail safety' to see if they are anagrams", () => {
    expect(isAnagram('Fairy Tales', 'Rail Safety')).toBe(true);
});

test("Compare string 'Fairy Tales!!' and 'Rail safety' to see if they are anagrams", () => {
    expect(isAnagram('Fairy Tales', 'Rail Safety')).toBe(true);
});

test("Compare string 'Hello, There' and 'Goodbye there' to see if they are anagrams", () => {
    expect(isAnagram('Hello, There', 'Goodbye There')).toBe(false);
});

test("Compare string 'Yots Of Toys!!' and 'Footsy sots' to see if they are anagrams", () => {
    expect(isAnagram('Fairy Tales', 'Rail Safety')).toBe(true);
});