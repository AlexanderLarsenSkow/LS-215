/*
Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.

Note that all numbers have a spotlight sum, including numbers on the edges.
All inputs will be valid grid (all rows will have the same length).

input: array of numbers
output: return an array of numbers

Rules:
  - Given an array of numbers, return an array of numbers that are summed with the numbers around them.
  - Number around: means that it is next the current number.
    - any number surrounding it.
    - A number surrounds if it is at a diagonal or if its up, left, right, or below the value.
  - transforming each value based on the other values.
  - all numbers must be included in the map. All will occur.
  - All rows have the same length
  - if empty array, return empty array.

Index Rules:
  - left or right: same row, second index + 1 or index - 1
  - up or down: first index + 1 or - 1, and same second index.
  - diagonal: first index + 1 or - 1, and second index +1 or - 1

Questions:
  - empty arrays?
  - no argument? 
  - anything else? NaN? Infinity?
  - negative numbers, 0?
  - Will there be any other input?

Examples:

console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
  

// [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]


console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
])); 
  
// [
//   [21, 31, 28, 24, 14],
//   [21, 31, 28, 24, 14]
// ]


console.log(spotlightMap([[3]])); // [[3]]

console.log(spotlightMap([1, 2, 3, 4, 5]));
// [3, 6, 9, 12, 9]

console.log(spotlightMap([[1, 2, 3, 4, 5]]));
// [[3, 6, 9, 12, 9]]

console.log(spotlightMap([
[1, 2, 3, 4, 5], 
[1, 2, 3, 4, 5]
]));

// [
//     [6, 12, 18, 24, 18],
    // [6, 12, 18 ,24, 18]
    // ]


console.log(spotlightMap([]));
// [[3, 6, 9, 12, 9]]

Data Structures:
Index Rules:
  - left or right: same row, second index + 1 or index - 1
  - up or down: first index + 1 or - 1, and same second index.
  - diagonal: first index + 1 or - 1, and second index +1 or - 1

  upIndex, downIndex, rightIndex, leftIndex, diagonalIndices

[
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28]
]

map and index. Take an arrayIndex
map and index again. 

Build a spotlight array based on left and right, up and down, and all diagonals.

forEach over the entire array with an index.
then iterate again over each array with another forEach index.

Algo:
  1. Build 3 helpers: 
    a. isUporDown, takes 4 args, first ind, second ind, for both vals
      - return true if first ind is +1 or -1 of other vals, and second ind is the same.

    b. isLeftOrRight: takes 4 args, first ind, second ind, for boht values
      - return true if first ind is the same and second ind is +1 or -1
    
    c. IsDiagonal, takes 4 args, same as above
      - return true if first ind is + 1 or - 1 and second ind is + 1 or - 1

  2. MAIN Function
    - GUARD CLAUSE: return [] if array is empty
    a. transform the array with map. take an index
    b. Inside the map callback, call map on each subarray. take an index
    c. HELPER

  3. buildSpotlight, takes the entire grid
    a. take a constant for the length of the grid
    b. take a constant of the lenght of the first subarray
    c. iterate over the grid with an index (arrayIndex)
    d. iterate again over the array with an index (numIndex)
    e. if the indices are upOrDown, leftOrRight, or Diagonal, add the current number to the spotlight.

  4. return a reduction of the spotlight array and sum it.

*/

function isUpOrDown(primeArrIndex, primeNumIndex, arrIndex, numIndex) {
  return (arrIndex === primeArrIndex + 1 || arrIndex === primeArrIndex - 1) && primeNumIndex === numIndex
}

function isLeftOrRight(primeArrIndex, primeNumIndex, arrIndex, numIndex) {
  return arrIndex === primeArrIndex && (primeNumIndex === numIndex + 1 || primeNumIndex === numIndex - 1);
}

function isDiagonal(primeArrIndex, primeNumIndex, arrIndex, numIndex) {
  return (primeArrIndex === arrIndex + 1 || primeArrIndex === arrIndex - 1) && 
  (primeNumIndex === numIndex + 1 || primeNumIndex === numIndex - 1 );
}

function buildSpotlight(grid, number, primeArrIndex, primeNumIndex) {
  let spotlight = [number];

  grid.forEach((subarr, arrIndex) => {
    subarr.forEach((num, numIndex) => {
      
      if (isUpOrDown(primeArrIndex, primeNumIndex, arrIndex, numIndex) || 
      isLeftOrRight(primeArrIndex, primeNumIndex, arrIndex, numIndex) ||
      isDiagonal(primeArrIndex, primeNumIndex, arrIndex, numIndex)
      ) {
        spotlight.push(num);
      }
    })
  })

  return spotlight;
}

function spotlightMap(grid) {
  if (grid.length === 0) return [];

  return grid.map((numbers, primeArrIndex) => {
    return numbers.map((number, primeNumIndex) => {
      let spotlight = buildSpotlight(grid, number, primeArrIndex, primeNumIndex);

      return spotlight.reduce((total, num) => num + total);
    })
  })
}

console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
  

// [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]


console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
])); 
  
// // [
// //   [21, 31, 28, 24, 14],
// //   [21, 31, 28, 24, 14]
// // ]


console.log(spotlightMap([[3]])); // [[3]]

console.log(spotlightMap([[1, 2, 3, 4, 5]]));
// // [3, 6, 9, 12, 9]

console.log(spotlightMap([
[1, 2, 3, 4, 5], 
[1, 2, 3, 4, 5]
]));

// // [
// //     [6, 12, 18, 24, 18],
//     // [6, 12, 18 ,24, 18]
//     // ]


console.log(spotlightMap([]));
// [[3, 6, 9, 12, 9]]