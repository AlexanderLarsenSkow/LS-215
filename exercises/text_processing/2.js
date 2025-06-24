// Delete Vowels

/*
input: array of strings
output: array of strings with all vowels deleted

Rules:
	upper and lower should be gone

Examples:
	removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

Data Structures:
	replaceAll

Algo:
	map the array, return the string replacing all vowels
*/

function removeVowels(strings) {
	const vowelRegex = /[aieou]/gi;
	return strings.map(string => string.replaceAll(vowelRegex, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

function removeVowels2(strings) {
	const VOWELS = ['a', 'e', 'i', 'o', 'u'];

	return strings.map(string => {
		let noVowels = string.split('').map(char => {
			if (VOWELS.includes(char.toLowerCase())) {
				return '';
			} else {
				return char;
			}
		})

		return noVowels.join('');
	})
}

console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
