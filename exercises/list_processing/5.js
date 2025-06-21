// Leading Substrings

/*
Input: string
output: array of substrings

Rules:
	- each substring should start from the first character.
	- taking a slice again and mapping based on that.

Examples:
	leadingSubstrings('abc');      // ["a", "ab", "abc"] a ab abc
	leadingSubstrings('a');        // ["a"]
	leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Data Structure:
	slice and map

Algo:
	- split into an array of characters
	- map the array and take a slice from the string
	- map should have an index and the slice should be 0, index + 1 as it increases.
	- sort the array in ascending order.
*/

function leadingSubstrings(string) {
	return string.split('')
								.map((char, index) => string.slice(0, index + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));      // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]