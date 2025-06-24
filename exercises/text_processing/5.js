// swap case

/*
input: string
output: string where all cases are swapped

examples:
	swapCase('CamelCase');              // "cAMELcASE"
	swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

Data Structures:
	2 replace calls, first on lower then on upper.
	2 functions

*/

function swapCase(string) {
	function chooseCase(char) {
		return char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase();
	}

	return string.replace(/[a-z]/ig, chooseCase);
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase2(string) {
	let swap = string.split('').map(char => {
		if (char.match(/[a-z]/)) {
			return char.toUpperCase();
		} else {
			return char.toLowerCase();
		}
	})

	return swap.join('');
}

console.log(swapCase2('CamelCase'));              // "cAMELcASE"
console.log(swapCase2('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
