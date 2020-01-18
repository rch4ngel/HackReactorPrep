const [chunk, chunkTwo, chunkPractice, chunkPracticeTwo] = require('./index');

// CHUNK 1 TESTS
test('Input data ([1, 2, 3, 4], 2) is chunked into n subarrays of size 2', () => {
    expect(chunk([1,2,3,4], 2)).toStrictEqual([[1,2],[3,4]])
});

test('Input data ([1, 2, 3, 4, 5], 2) is chunked into n subarrays of size 2', () => {
    expect(chunk([1,2,3,4,5], 2)).toStrictEqual([[1,2],[3,4],[5]])
});

//CHUNK 2 TESTS
test('Input data ([1, 2, 3, 4], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkTwo([1,2,3,4], 2)).toStrictEqual([[1,2],[3,4]])
});

test('Input data ([1, 2, 3, 4, 5], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkTwo([1,2,3,4,5], 2)).toStrictEqual([[1,2],[3,4],[5]])
});

//CHUNK Practice TESTS
test('Input data ([1, 2, 3, 4], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkPracticeTwo([1,2,3,4], 2)).toStrictEqual([[1,2],[3,4]])
});

test('Input data ([1, 2, 3, 4, 5], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkPracticeTwo([1,2,3,4,5], 2)).toStrictEqual([[1,2],[3,4],[5]])
});

//CHUNK Practice Two TESTS
test('Input data ([1, 2, 3, 4], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkPractice([1,2,3,4], 2)).toStrictEqual([[1,2],[3,4]])
});

test('Input data ([1, 2, 3, 4, 5], 2) is chunked into n subarrays of size 2', () => {
    expect(chunkPractice([1,2,3,4,5], 2)).toStrictEqual([[1,2],[3,4],[5]])
});