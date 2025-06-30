/*
input: string
output: true or false

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Rules:
	- Given letter blocks that each have two letters, return true if you can spell a given string
		from those blocks.
	- You can only use a block ONE TIME.
	- You can only use one letter from a block.
		- B:O  can only be used once and you can use either B or O, not both.
	- Strings are case-insensitive.

Questions:
	- What happens if the string is empty?
	- What happens if we get some other value? Will we ever get an array?
	- What happens if the argument is omitted? Will that ever happen?
	- 

Assumptions:
	- 

Examples:
	// true cases

	console.log(isBlockWord('BATCH'));      // true, BATCH
	console.log(isBlockWord('jest'));       // true, lowercase example, no sharing.
	console.log(isBlockWord('BaT'));       // true, lowercase example, no sharing.
	console.log(isBlockWord('bxdcngrfjhvlz'));       // true, using every block.
	console.log(isBlockWord('B')); // true

// false test cases
	console.log(isBlockWord('BUTCH'));      // false, BU, U and H share a block, so false.
	console.log(isBlockWord('BB'));      // false, BU, can't reuse letters.
	console.log(isBlockWord('NAB'));      // false, BU, U and H share a block, so false.

// Edge Cases:
	console.log(isBlockWord(''));      // false
	console.log(isBlockWord(' '));      // false
	console.log(isBlockWord('*'));      // false

	Data Structures:
		// Object for the letter Blocks

const LETTER_BLOCKS = {
		B: 'O',   X: 'K',   D: 'Q',   C: 'P',   N: 'A',
		G: 'T',   R: 'E',   F: 'S',   J: 'W',   H: 'U',
		V: 'I',   L: 'Y',   Z: 'M',
}

add each character to an array when they're used up. ['B', 'O] array of characters.
	if the character is included in the array, we're done.


Algo:
	- guard clause: return false outright if '' empty string.
	1. Create a usedCharacters array.
	2. Convert the letter block to an array of blocks.
	3. iterate through a downcased version of the string.
	4. If UsedCharacters contains the current character, return false
	5. If any block includes the letter downcased letter, then we add that block to UsedCharacters.
		- HELPER => true or false
			- iterate take some of the blocks. If any block contains the given letter, we return true.
				else, false
		if no blocks, we return false as well here.
	6. If we finish iteration, return true.
	*/

	const LETTER_BLOCKS = {
		B: 'O',   X: 'K',   D: 'Q',   C: 'P',   N: 'A',
		G: 'T',   R: 'E',   F: 'S',   J: 'W',   H: 'U',
		V: 'I',   L: 'Y',   Z: 'M',
	}

function containsChar(blocks, char) {
	return blocks.some(block => block.includes(char));
}

function findBlockIndex(blocks, char) {
	return blocks.findIndex(block => block.includes(char));
}

function isBlockWord(string) {
	if (!string) return false;
	let blocks = Object.entries(LETTER_BLOCKS);
	let usedCharacters = [];

	for (let char of string.toUpperCase()) {
		if (usedCharacters.includes(char) || !containsChar(blocks, char)) {
			return false;
		} else {
			let idx = findBlockIndex(blocks, char);

			usedCharacters.push(blocks[idx][0], blocks[idx][1]);
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