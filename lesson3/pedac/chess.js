/*
	input: string representation of chess board
	output: true or false

	Rules:
		Given a chess board string, return true or false if 2 queens can attack each other.
		A queen can attack when they are adjacent with any number of spaces.
		A queen can attack when they are diagnal to each other.
		Queens are represented by index locations on the chess board.

	Examples: always 8 tiles, so regex match that takes 8. 1 W or 1 B
		Diagnal:
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ W _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ B _
		_ _ _ _ _ _ _ _ 6 7
		_ _ _ _ _ _ _ _

		White: row index 2, column index 3 (2, 3) => 3
		Black: row index 5, column index 6, (5, 6) => 3

	Adjacent:
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ W _ B _ _
		_ _ _ _ _ _ _ _
		_ _ _ B _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _

		White: (2, 3) => Black: (2, 5), one of the numbers is equal, they're adjacent.
		White: (2, 3) => Black (4, 3) 3 === 3, so adjacent is true

	Data Structure:
	[- - - - - - -,
	 - - - - - - -]

	 regex match => /([WB]{0,2}[_][WB]{0,2}){8}/g
	 	regex rules:
			- _ _ _ _ _ _ _ _
				_ _ _ _ B _ _ _
				_ _ _ W _ _ _ _

	Data Structures:
		get the match array, gives an index.
		Now, we need to find the string that has W and the string that has B.
		ForEach iteration. Use indexOf to return the final index inside the string.

		do it for B

		Then, having both, HELPERS for checking for adjency and diagnalcy.
		adjacent: means that 1 index is the same. If the first index in Wis the same as teh first in B,
			then we are adjacent, returns true.
		diagnal: take the max of both first and last index. If the difference between max and min is the
			same, then return true for diagnal.

		Return true if adjacent or diagnal. else false.
*/
		let adjacentBoard = ' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ W _ B _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _';

		// 2, 3 and 2, 5

		let diagnalBoard = ' _ _ _ _ _ _ _ _' +
		' _ _ _ W _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ B _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _';

		// 1 3 and 3 5

	let verticalAdjacent = 		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ B _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ W _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _';
	
		// B 2, 5 and  W 5, 5

	let noAttack = ' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _' +
		' _ _ _ _ _ W _ _' +
		' B _ _ _ _ _ _ _' +
		' _ _ _ _ _ _ _ _';

const boardRegex = /( _| B{0,1}| W{0,1}){8}/g;
		
function pieceIndex(row, piece) {
	let count = 0;

	for (let char of row) {
		if (char === piece) return count;
		if (char.match(/[_WB]/)) count += 1;
	}
}

function determineIndices(boardArr, piece) {
	const pieceRow = boardArr.find(row => row.includes(piece));
	
	let index1 = boardArr.indexOf(pieceRow);
	let index2 = pieceIndex(pieceRow, piece);

	return [index1, index2];
}

function sameRow(whitePos, blackPos) {
	return whitePos[0] === blackPos[0];
}

function sameCol(whitePos, blackPos) {
	return whitePos[1] === blackPos[1];
}

function areDiagnal(whitePos, blackPos) {
	const rowDifference = Math.abs(whitePos[0] - blackPos[0]);
	const colDifference = Math.abs(whitePos[1] - blackPos[1]);
	
	return rowDifference === colDifference;
}
		
function queenCanAttack(board) {
	const boardArr = board.match(boardRegex);

	const whitePos = determineIndices(boardArr, 'W');
	const blackPos = determineIndices(boardArr, 'B');

	return sameRow(whitePos, blackPos) || sameCol(whitePos, blackPos) ||
		areDiagnal(whitePos, blackPos);
}

console.log(queenCanAttack(adjacentBoard)); // true
console.log(queenCanAttack(diagnalBoard)); // true
console.log(queenCanAttack(verticalAdjacent)); // true
console.log(queenCanAttack(noAttack)); // false