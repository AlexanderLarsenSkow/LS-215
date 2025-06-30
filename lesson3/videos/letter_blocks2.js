/*
This is a refactoring of letter blocks with a more conducive data structure.

In the first attempt, I was able to solve it but was working against a difficult data structure
	that didn't suit the problem. In this case, we will change the data structure to an array of 
	string pairs.

Data Structures:

	const LETTER_BLOCKS = {
		B: 'O',   X: 'K',   D: 'Q',   C: 'P',   N: 'A',
		G: 'T',   R: 'E',   F: 'S',   J: 'W',   H: 'U',
		V: 'I',   L: 'Y',   Z: 'M',
	}

	will become an array of pairs:
	['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE' 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

Algo:
	1. if the string is empty, return false outright.
	2. Create a copy of the constant array to work with.
	3. Look for an index inside the array of pairs. If We find an index, then we know it's included.
		if the index is -1, then we know that it is not present.	
	4. If we have an index for the letter, then we splice the value at that index out of the array.
	5. If the current letter is not located inside the blocks copy, then we return false.
	6. If we finish iteration, return true	.
*/

const LETTER_BLOCKS = [
	'BO', 'XK', 'DQ', 
	'CP', 'NA', 'GT', 'RE',
	'FS', 'JW', 'HU', 
	'VI', 'LY', 'ZM'
];

function findBlockIndex(blocks, char) {
	return blocks.findIndex(block => block.includes(char));
}

function isBlockWord(string) {
	if (string === '') return false;
	let availableBlocks = LETTER_BLOCKS.slice();

	for (let char of string.toUpperCase()) {
		let index = findBlockIndex(availableBlocks, char);
		
		if (index === -1) {
			return false;
		} else {
			availableBlocks.splice(index, 1);
		}
	}

	return true;
}

	// true cases

	console.log(isBlockWord('BATCH') === true);      // true, BATCH
	console.log(isBlockWord('jest') === true);       // true, lowercase example, no sharing.
	console.log(isBlockWord('BaT') === true);       // true, lowercase example, no sharing.
	console.log(isBlockWord('bxdcngrfjhvlz') === true);       // true, using every block.
	console.log(isBlockWord('B') === true); // true

// false test cases
	console.log(isBlockWord('BUTCH') === false);      // false, BU, U and H share a block, so false.
	console.log(isBlockWord('BB') === false);      // false, BU, can't reuse letters.
	console.log(isBlockWord('NAB') === false);      // false, NA same block

// Edge Cases:
	console.log(isBlockWord('') === false);      // false
	console.log(isBlockWord(' ') === false);      // false
	console.log(isBlockWord('*') === false);      // false