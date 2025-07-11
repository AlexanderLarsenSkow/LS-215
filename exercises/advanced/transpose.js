/*
input:
output:

Rules:
	- A matrix, like this:
			1  5  8
			4  7  2
			3  9  6
	is represented by an array of arrays:

		const matrix = [
		  [1, 5, 8],
		  [4, 7, 2],
		  [3, 9, 6],
		];

	Transpose the arrays to become:

			1  4  3 column1
			5  7  9 column2
			8  2  6 column3

	- Return the tranposition of the arrays
	- Don't mutate the input array

Questions:

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Data Structures:

col1, col2, col3

			1  5  8
			4  7  2
			3  9  6

			1  4  3
			5  7  9
			8  2  6

			iterate from 0 to the end, this is the row index.
			for each of these, iterate from 0 to end, this is col index

		[0][0], [1][0], [2][0]
		[0][1], [1][1], [2][1]
		[0][2], [1][2], [2][2]

		Create a new array at each iteration. Add into a final matrices array at the end.

Now getting them into the new array is the trouble.
Options:
	push into the array

Algo:
	1. Create an empty matrices array.
	2. Create a for loop that starts from 0 and goes to the end of the input array.
		- col index
		- Create a matrix array here.
	3. Create a nested for loop that does the same thing, from 0 to the end.
		- row index
	4. At teh end of this loop, add the value to the matrix array. should be rowindex, colindex.
	5. After the outer loop is finished, add the matrix to the matrices array
	6. return matrices.
*/

function transpose(matrix) {
	let matrices = [];
	const rowSize = matrix[0].length;

	for (let colIndex = 0; colIndex < matrix.length; colIndex += 1) {
		let row = [];

		for (let rowIndex = 0; rowIndex < rowSize; rowIndex += 1) {
			row.push(matrix[rowIndex][colIndex]);
		}

		matrices.push(row);
	}

	return matrices;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]