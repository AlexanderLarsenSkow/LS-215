/*
input: string
output: staggered caps string

Rules:
	Every other character should be capitalized / lowercased.
	nonalphabetic characters shouldn't change but should be counted as characters.
	spaces DO count.

Examples:
	staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
	staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
	staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Data Structures:
	map, even indicies are uppercased and odd indices are downcased

Algo:
	map the array with an index
		if the current index is pos, return a uppercased char
		else, return a lowercased char
	join the array into a string
	return the string
*/

function staggeredCase(string) {
	return string
		.split('')
		.map((char, index) => {
		if (index % 2 === 0) {
			return char.toUpperCase();
		} else {
			return char.toLowerCase();
		}
	})
	.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// replace can also take an index, which is ridiculously useful.

function staggeredCase2(string) {
	return string.replace(/[a-z]/gi, (char, index) => {
		return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
	})
}

console.log(staggeredCase2('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
