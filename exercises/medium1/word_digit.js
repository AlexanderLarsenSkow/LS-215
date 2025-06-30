/*
Word to Digit

input: sentence string
output: return string with all word digits converted to number digits.

Rules:
	- Given a string with word digits, return the words converted to numbers.
		- four => 4
		- five => 5
	- The word digits that will appear will only ever be 0-9
	- The returned string must keep punctuation and it must work with punctuation or added characters.

Questions:
	- What happens when a string is not input?
	- What happens when there is no argument?
	- What do we do there are no word digits?

Examples:
	console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

	console.log(wordToDigit('I have eight friends.')); // I have 8 friends.

	console.log(wordToDigit('There are no numbers here.')); // There are no numbers here.

Data Structures:
	['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

Algo:
	1. Create an array of word numbers
	2. Create a regex that checks for them in alternation
	3. Replace every word character with the index converted to an umber from the constant.
	4. return it.
*/

const WORD_DIGITS = [
		'zero', 'one', 'two', 
		'three', 'four', 'five', 
		'six', 'seven', 'eight', 'nine'
	]

const wordDigitRegex = /\b(zero|one|two|three|four
|five|six|seven|eight|nine)\b/gi;

function wordToDigit(sentence) {
	return sentence.replace(wordDigitRegex, word => {
		word = word.toLowerCase();
		return String(WORD_DIGITS.indexOf(word));
	})
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('I have eight friends.')); // I have 8 friends.

console.log(wordToDigit('There are no numbers here.')); // There are no numbers here.
console.log(wordToDigit('There are zero numbers here.')); // There are 0 numbers here.
console.log(wordToDigit('I have a weight here!'));

console.log(wordToDigit('I have EIGHT friends!')); // I have 8 friends!