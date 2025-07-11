function transpose(matrix) {
	let matrices = [];
	const rowSize = matrix[0].length;

	for (let colIndex = 0; colIndex < rowSize; colIndex += 1) {
		let row = [];

		for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
			row.push(matrix[rowIndex][colIndex]);
		}

		matrices.push(row);
	}

	return matrices;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]