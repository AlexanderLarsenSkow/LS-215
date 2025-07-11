/*
Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

Input: array of numbers, and a number
output: number that represents the column

Rules:
  - Given an array of numbers and a number n, return the column number.
  - What is the column number?
    - That is the 1-indexed number for each column. First column => 1
    - How to get the columnNumber => index + 1
  
  - What is a column?
    - A column is a grouping of elements at the same indices in the subarrays in the main array.
    - [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]
       ]

      col1 => 1 4 7
      col2 => 2 5 8
      col3 => 3 6 9

   - the array will always divide into equal length groups. 
    - The array will always be divisible by n
  - Return null if one of the arguments is missing
  - Return null if the number is NaN or Infinity / -Infinity
  - Return empty array if n is 0 or array is empty.
  - Return empty array if n is negative.
  - If number is 1, return 1.

  - If two columns have same sum, return column with smallest column number.

Questions:
  - Is it always divisible by n? What do we do in the case that it isn't?
  - What should we do if one of the arguments is missing or more arguments are supplied?
  - What should we do if the number n is 0?
  - What should we do if the input array is empty?
  - Will the array always contain numbers and only numbers?
  - Will the number ever be NaN / -Infinity / Infinity?
  - Will the number ever be negative?
  - What do we do if the number is equal to the length?

Examples:

// [[4, 14, 12,  7],
// [14, 16, 5, 13],
// [7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)

// Generic Cases

let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
let n = 4

console.log(greatestColumn(nums, n)); // 2
console.log(greatestColumn([1 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 3
console.log(greatestColumn([10, 5, 2, 7, 3, 6], 2)); // 2

// Edge Cases

// Equal Sums
console.log(greatestColumn([10, 5, 2, 7], 2)); // 1
console.log(greatestColumn([1, 2, 2, 1], 2)); // 1
console.log(greatestColumn([3, 2, 6, 7], 2)); // 2

// null cases

console.log(greatestColumn([10, 5, 2, 7])); // null
console.log(greatestColumn()); // null
console.log(greatestColumn([1, 2], NaN)); // null

// Empty Array cases

console.log(greatestColumn([10, 5, 2, 7], 0)); // []
console.log(greatestColumn([], 2)); // []
console.log(greatestColumn([10, 5, 2, 7], -2)); // []

// Number 1

console.log(greatestColumn([10, 5, 2, 7], 1)); // 1

Data Structures:

let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]

put the numbers into subarrays
we start a new array when the input number is a multiple of index + 1

// [[4, 14, 12, 7],
// [14, 16, 5, 13],
// [7, 16, 11, 19]]

iterate from 0 0 1 0 2 0
  iterating from colIndex => 0 to the length of hte entire array
  iterate again from 0 to the length of the first subarray

[4, 14, 7],
[14, 16, 16],
[12, 5, 11],
[7, 13, 19]

map => sums, then find the index of the greatest sum.
Edge Case: if two are the same.
have a max, find the index of column that has the greatest sum and return it + 1.

3 2 6 7 => 
  [3, 2],
  [6, 7]

transpose =>
[3, 6]
[6, 7]

[9, 9] => 1
find the column with the smallest number that sums to this max.

Reduce to find a min?
  reset the min when the subarray, summed, is equal to the max
    and it is lower than every other value...
  take the min from each subarray.

Algo:
  - GUARD CLAUSES: return null if either arg is undefined or if the number is NaN
  - return [] if the number is less than 1 OR the array is empty
  - return 1 if the number is 1.


  1. HELPER divideArray, 2 args: array, and n
    a. Create an empty result array and a subarray
    b. Iterete from 0 up to the length of the array, push all numbers into the subarray
    c. When the 4 is a multiple of hte index + 1,
      - add the subarray to the result
      - reset teh subarray to an empty array.
    d. Return the array.

  2. makeColumns, 1 arg: nestedCollection
    a. create a result array
    b. Iterate from 0 to the length of the entire array, colindex
    c. Iterate from 0 to the length of the first subarray, rowIndex
    d. add the element at rowIndex, colIndex to the current subarr
    e. At the end of the inner loop, add the subarr to the result.
    f. Return the result.

  3. greatSum, Main Function
    a. map the columns into sums.
    b. Find the max of this array.
    c. If the count is 1, return the index of that sum + 1.
    d. If the count is greater, then we need to find the column with the smallest number and return that index.

  4. findSmallestOfGreatestSums, 2 args, max sum and array of columns
    a. find the smallest value in the array of columns
    b. Reduce the array.
    c. Take the sum of each subarray.
    d. Take the min from each subarray.
    e. If the sum is equal to the max, and the set the accumulator to the min.
    f. Return the index of that subarray with the min value.
    g. Return the index + 1.
*/

function divideArray(numbers, n) {
  let [result, subarr] = [[], []];

  for (let i = 0; i < numbers.length; i += 1) {
    subarr.push(numbers[i]);
		
    if ((i + 1) % n === 0) {
      result.push(subarr);
      subarr = [];
    }
  }

  return result;
}

function makeColumns(array) {
  let columns = [];

  for (let colIdx = 0; colIdx < array[0].length; colIdx += 1) {
    let column = [];

    for (let rowIdx = 0; rowIdx < array.length; rowIdx += 1) {
      column.push(array[rowIdx][colIdx]);
    }

    columns.push(column);
  }

  return columns;
}

function sum(column) {
  return column.reduce((total, num) => total + num);
}

function count(sums, max) {
  return sums.filter(sum => sum === max).length;
}

function findSmallestOfGreatestSums(max, columns) {
  let min = columns.reduce((greatestMin, column) => {
    let currentSum = sum(column);
    let colMin = Math.min(...column);

    if (greatestMin > colMin && currentSum === max) {
      greatestMin = colMin;
    }

    return greatestMin;

  }, Infinity);

  return columns.findIndex(col => col.includes(min) && sum(col) === max);
}

function findMaxNumber(columns) {
  let sums = columns.map(sum);
  let max = Math.max(...sums);

  if (count(sums, max) === 1) {
    return sums.indexOf(max) + 1;
  } else {
    return findSmallestOfGreatestSums(max, columns) + 1;
  }
}

function greatestColumn(numbers, n) {
  if (numbers === undefined || n === undefined ||
    Number.isNaN(n)) return null;
  if (n < 1 || numbers.length === 0) return [];
  if (n === 1) return 1;

  let dividedArr = divideArray(numbers, n);
  let columns = makeColumns(dividedArr);
  
  return findMaxNumber(columns);
}

// Generic Cases

let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
let n = 4

console.log(greatestColumn(nums, n)); // 2
console.log(greatestColumn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 3
console.log(greatestColumn([10, 5, 2, 7, 3, 6], 2)); // 2

// // Edge Cases

// // Equal Sums
console.log(greatestColumn([10, 5, 2, 7], 2)); // 1
console.log(greatestColumn([1, 2, 2, 1], 2)); // 1
console.log(greatestColumn([3, 2, 6, 7], 2)); // 2

// // null cases

console.log(greatestColumn([10, 5, 2, 7])); // null
console.log(greatestColumn()); // null
console.log(greatestColumn([1, 2], NaN)); // null

// // Empty Array cases

console.log(greatestColumn([10, 5, 2, 7], 0)); // []
console.log(greatestColumn([], 2)); // []
console.log(greatestColumn([10, 5, 2, 7], -2)); // []

// // Number 1

console.log(greatestColumn([10, 5, 2, 7], 1)); // 1