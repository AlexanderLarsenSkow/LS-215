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