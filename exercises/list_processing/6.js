// All Substrings

/*
	input: string
	output: all substrings

	Rules:
		all substrings means all for 0, all for 1, etc.
		return from shortest to longest for given index.

	Examples:
		substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

	0 1 0 2 0 3 0 4 0 5
	1 2 1 3 1 4 1 5
	2 3 2 4 2 5
	3 4 3 5
	4 5

	first index should increase every time we get to a new value.
	second index, inner index, should iterate from that index + 1 to the end of the array.

	Data Structures:
		mechanical or map?
		map version... => giving an index...

		split into array of characters.
		for each character, we want to get substrings from that to the end.

	Algo: Mechanical
		- create an emtpy array
		- iterate over the entire array with an outer index.
		- iterate AGAIN with a for loop. This should be a second index that is always the outer Index + 1
		-take the slice starting at inner Index and ending at outer Index.
		- add to array, return array
*/

function substrings(string) {
	let substrings = [];

	string.split('').forEach((char, index1) => {
		for (let index2 = index1 + 1; index2 <= string.length; index2 += 1) {
			substrings.push(string.slice(index1, index2));
		}
	})

	return substrings;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]