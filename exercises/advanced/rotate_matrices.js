/*
input: matrix, array of arrays
output: matrix rotated by 90 degrees

Rules:

Questions

Examples:
	Starting iteration:

		1  5  8
		4  7  2
		3  9  6

	3 is at the bottom, in the first column. So start at highest index

	[2][0] => [1][0], [0][0] colIndex, rowIndex

	After 90 degree rotation:

		3  4  1
		9  7  5
		6  2  8

	best to take it row by row.
	So get 341 first
	then 975
	then 628

		158 => 341
		472 => 975
		396 => 628

		first row becomes last column
		second row becomes second column
		third row becomes third column


	Data Structures:
		Start iterating from the length of the matrix down to 0.
		For the second loop, iterate from 0 up to the size of the first element.

	Algo:
		1. Create an empy 90Rotation array
		2. Create a variable to hold the length of the first subarray.
		3. Iterate from 0 to the size of the first element. This is the columnIndex.
		4. Create an empty row array here.
		5. Iterate again from the size of the matrix down to 0. this is the row index.
		6. Push this element at rowIndex columnIndex into the row.
		7. After the row is complete, push it into the Rotation array.
		8. Return the array.
*/

function rotate90(matrix) {
	let rotation = [];
	const rowSize = matrix[0].length;

	for (let colIndex = 0; colIndex < rowSize; colIndex += 1) {
		let row = [];

		for (let rowIndex = matrix.length - 1; rowIndex >= 0; rowIndex -= 1) {
			row.push(matrix[rowIndex][colIndex]);
		}

		rotation.push(row);
	}

	return rotation;
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]	