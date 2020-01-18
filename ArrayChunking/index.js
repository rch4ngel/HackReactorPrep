// Array chunking is going to take in to arguments, an array and a size.
// To array chunk take the orginal array and split it up into subarrays of
// the size of the "size" argument.
// Example:
// chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]


// SOLUTION 1
function chunk(array, size) {
    let arrayContainer = [];

    for(let element of array) {
        const last = arrayContainer[arrayContainer.length - 1];

        if(!last || last.length === size) {
            arrayContainer.push([element])
        } else {
            last.push(element)
        }
    }

    return arrayContainer;
}

// SOLUTION 2
function chunkTwo(array, size) {
    let arrayContainer = [];
    let index = 0;
    while(index < array.length){
        arrayContainer.push(array.slice(index, index+size));
        index += size;
    }

    return arrayContainer;
}

// Array Chunk Practice

function chunkPractice(array, size) {
    let arrayContainer = [];

    for(let element of array) {
        const last = arrayContainer[arrayContainer.length - 1];

        if(!last || last.length === size) {
            arrayContainer.push([element])
        } else {
            last.push(element)
        }
    }

    return arrayContainer

}

function chunkPracticeTwo(array, size) {
    const arrayContainer = [];
    let index = 0;

    while(index < array.length) {
        arrayContainer.push(array.slice(index, size + index));
        index += size;
    }
    return arrayContainer;
}
module.exports = [chunk, chunkTwo, chunkPractice, chunkPracticeTwo];