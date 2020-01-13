function fizzBuzz(intArray) {
    for(index in intArray) {
        if (intArray[index] % 3 === 0 && intArray[index] % 5 === 0) {
            intArray[index] = 'fizzbuzz'
        } else if(intArray[index] % 3 === 0) {
            intArray[index] = 'fizz'
        } else if (intArray[index] % 5 === 0) {
            intArray[index] = 'buzz'
        }
    }

    console.log(intArray);
    return intArray
}

module.exports = fizzBuzz;