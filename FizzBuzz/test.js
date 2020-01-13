const fizzBuzz = require('./index');

test('Takes in array of integers [1, 2, 3, 4, 5, 8, 9, 10, 55, 300, 301] and performs fizz buzz', () =>{
    expect(fizzBuzz([1, 2, 3, 4, 5, 8, 9, 10, 55, 300, 301])).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 8, 'fizz', 'buzz', 'buzz', 'fizzbuzz', 301])
});

test('Takes in array of integers [3, 33, 1, 500, 15] and performs fizz buzz', () => {
    expect(fizzBuzz([3, 33, 1, 500, 15])).toStrictEqual(['fizz', 'fizz', 1, 'buzz', 'fizzbuzz'])
});