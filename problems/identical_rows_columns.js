/*

Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.

Non-square matrices should return false.

[
  [1, 2, 3, 4],
  [2, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0]
]

// 2nd row + 2nd column are identical: [2, 4, 9, 8]

input: array of arrays, each array has numbers
output: true or false if a row is equivalent to a column.

Rules:
  - Return true or false if a row in a given matrix is equivalent to a column
  - what is equivalent?
    - they have the same values in the same positions.
  - If the matrix is not square, then return false.
    - a matrix is not square if rows are longer than columns.
  - if the input array is empty, return false.

Questions:
  - empty arrays?
  - Will the matrix every have nested empty arrays?
  - Will the matrix ever have other values inside the subarrays?
  - can the arrays be sparse or have object properties?
  - Can NaN, Infinity, -infinity occur?
  - Can 0 occur?
  - Can negative numbers occur?
  - What is a non-square matrix?
    - rows are longer than columns or columns are longer than squares

Examples:

console.log(hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
])); // true

console.log(hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
])); // false

console.log(hasIdentical([
  [1, 1],
  [1, 1]
])); // true

console.log(hasIdentical([
  [0, 1],
  [1, 2]
])); // true

console.log(hasIdentical([
  [4, 4],
  [2, 1]
])); // false

console.log(hasIdentical([
  [4, 2],
  [2, 1]
])); // true

// Edge Cases

// Empty Arrray
console.log(hasIdentical([])); // false

// not square
console.log(hasIdentical([
  [4, 2, 3],
  [2, 1]
])); // false

console.log(hasIdentical([
  [4, 2],
  [2, 1],
  [3]
])); // false


Data Structures:

  Rows =>   [0, 1],
            [1, 2]

  Columns =>
      [0, 1]
      [1, 2]

  One of the first things we need to do is transpose all the arrays in the matrix.

  After getting the teh columns, check if every row length is equivalent to every column length. If not, they are not square and return false.

  At this point, If a single row array is equivalent to a single column array, return true.

  Equivalent? Take both arrays, iterate through. Return true ir iteration is complete and false if not.

Algo:
  1. Return false if the input array is empty
  2. take the rows matrix and transpose it into columns
    - HELPER transpose, rows, => columns matrix
      aa. Map the array by the length of each subarray and take a max.
      a. Create a loop that starts at 0, a columnIdx and goes until it hits the lenght of the outer array
      b. Create a second loop that starts at 0 and goes until the length of the length of the longest subarray. 
      c. push the value at the RowIdx colIdx into a new array.
      d. Push that array into a final array.
      e. return the array.
    
  3. Return false if every row length is not equivalent to every column length.
    HELPER: isSquare, rows and columns, => true / false
    a. if any column has undefined as an element, return false. It is not square.
    d. Else, return false. 

  4. if a single row is equivalent to a single column, return true.
    a. call some on rows.
    b. call some on columns.
    c. If a row is equivalent to a column, return true.
    
    Equivalent HELPER
      a. take both columns and rows
      b. Iterate through both with an index.
      c. If the elements at both are not equal, return false.
      d. If iteration is finished, return true.
*/

function transpose(rows) {
  let lengths = rows.map(row => row.length);
  const maxLength = Math.max(...lengths);
  let columns = [];
  
  for (let colIdx = 0; colIdx < maxLength; colIdx += 1) {
    let column = [];

    for (let rowIdx = 0; rowIdx < rows.length; rowIdx += 1) {
      column.push(rows[rowIdx][colIdx]);
    }

    columns.push(column);
  }

  return columns;
}

const hasUndefined = column => column.includes(undefined);

function notSquare(columns) {
  return columns.some(hasUndefined);
}

function areIdentical(row, column) {
	return row.every((num, index) => num === column[index]);
}

function oneIsEquivalent(rows, columns) {
  return rows.some(row => {
    return columns.some(column => areIdentical(row, column));
  })
}

function hasIdentical(rows) {
  if (rows.length === 0) return false;
  let columns = transpose(rows);

  if (notSquare(columns)) return false;

  return oneIsEquivalent(rows, columns);
}

console.log(hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
])); // true

console.log(hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
])); // false

console.log(hasIdentical([
  [1, 1],
  [1, 1]
])); // true

console.log(hasIdentical([
  [0, 1],
  [1, 2]
])); // true

console.log(hasIdentical([
  [4, 4],
  [2, 1]
])); // false

console.log(hasIdentical([
  [4, 2],
  [2, 1]
])); // true

// // Edge Cases

// // Empty Arrray
console.log(hasIdentical([])); // false

// not square
console.log(hasIdentical([
  [4, 2, 3],
  [2, 1]
])); // false

console.log(hasIdentical([
  [4, 2],
  [2, 1],
  [3]
])); // false
