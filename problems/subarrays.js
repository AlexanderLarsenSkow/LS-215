/*
[[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4], [1, 2, 3], [1, 2], [1]]

[1, 2] take a length from testArray, build subarrays in the mainArray

Rules:
  - the length of the subarrays should always be based on the length of the testArray
  - the subarrays should not include extra values. At the end of the array, it should include undefined or go beyond.
  - Starting point is always 0 to the main Length - the test length. firstIndex
  - iterate from start Index + test Length to get the last index.

subarrays: 

[
[[1, 2], [2, 3] [3, 4], [4, 5] [5, 6], [6, 7] [7, 8]], 
[[1, 2], [2, 3], [3, 4]],
[1, 2],
[]
]

[['a', 'b', 'c', 'd'], ['a', 'c', 'e', 'f', 'g']]
=> [
  [['a', 'b', 'c'], ['b', 'c', 'd']],
  [['a', 'c', 'e'], ['c', 'e', 'f'], ['e', 'f', 'g']]
  ]

['a', 'b', 'c']

abc
abcd

slice(0, 3), slice(1, 4)
*/

function oneSubarray(subarray, testArray) {
  const testLength = testArray.length;
  const mainLength = subarray.length;
  let subarrays = [];

  for (let firstIdx = 0; firstIdx <= mainLength - testLength; firstIdx += 1) {
		console.log(firstIdx);

    for (let index2 = firstIdx + testLength; index2 <= mainLength; index2 += 1) {

      subarrays.push(subarray.slice(firstIdx, index2));
    }
  }

  return subarrays;
}

console.log(oneSubarray([1, 2, 3, 4], [1, 2, 3]));

function buildSubarrays(mainArray, testArray) {
  return mainArray.map(subarray => {
    return oneSubarray(subarray, testArray);
  })
}


let mainArr1 = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4], [1, 2, 3], [1, 2], [1]];

let mainArr2 = [['a', 'b', 'c', 'd'], ['a', 'c', 'e', 'f', 'g']];

// console.log(buildSubarrays(mainArr1, [1, 2]));
console.log(buildSubarrays(mainArr2, ['a', 'b', 'c']));