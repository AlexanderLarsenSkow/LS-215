/*
	input: string
	output: similar deal

	ignores non-alphabetic characters.
	replace again, but no index in callback

	Algo:
		create count variable at 0,
		inside the replace callback, if the count is even, uppercase it, else downcase
		only increase the count if it matches a upper or lowercase char

*/

const letterRegex = /[a-z]/gi;

function staggeredCase(string) {
	let count = -1;
	
	return string.replace(letterRegex, char => {
		count += 1;
		return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
	})
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase2(string) {
	let count = -1;

	return [...string].map(char => {
		if (char.match(/[a-z]/gi)) count += 1;
		return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
	})
										.join('');
}

console.log(staggeredCase2('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase2('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase2('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
