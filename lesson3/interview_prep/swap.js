/*
input: string
output: string where alphabetic chars are replaced by numeric chars, and vica versa

Rules:
	- Take the PLACE of each other.
	- Replace alpahebtic chars with numeric chars => a is always replaced by 1, b by 2, etc.
	- replace numeric chars with alphabetic chars => 1 => a/A, 2 => b/B, c => c/C
	- A string will always be input and the argument will always be provided.	
	- return an empty string if the input is empty.
	- Other types of character may be present. Add them to the string as is.
	- Different Value Tracking:
		- lengths of letter characters and lengths of digit characters.
		- Only replacing letters/characters up to the min length. a21, only replacing 1 of each.
		- Different indices, the crux of the problem: 

Questions:
	- Will it always be 'abc' for example?
	- How important is the order in this particular problem?
	- What do we do with an empty string?
	- What do we do when there are no number characters or no letter characters?
	- Will the letters and numbers always match? Or do they only have to be in order?
	- For example, instead of 1, 2, 3, could we get 10, 15, 20 and 'x', 'y', 'z' where
		x replaces 10, y replaces 15, and z replaces 20?
	- What do we do when the letters and numbers are mismatched?
	- What do we do with non-alphanumeric characters?
	- Argument ever omitted? No.

Assumptions:

Examples:

console.log(swap("1a2b3c") === "a1b2c3"); // true
	- 1a2b3c => a1b2c3
	- letter indexes: [1, 3, 5] => these become numbers
	- number indexes: [0, 2, 4] => these become letters

// Mismatched Lengths of letters and Numbers:	

console.log(swap("abcd123") === "123dabc"); // true
	- abcd123 => 123dabc
	- letter indexes: [0, 1, 2, 3]
	- number index: [4, 5, 6]

console.log(swap("abcde1234") === "1234eabcd"); // true
console.log(swap("21a") === "2a1"); // true
console.log(swap("a1b") === "1ab"); // true
console.log(swap("1a2bc") === "a1b2c"); // true
console.log(swap("abc") === "abc"); // true
console.log(swap("12") === "12"); // true

// Edge Cases:

// Empty string
console.log(swap("") === ""); // true

// Other Characters:
console.log(swap("abc#-123") === "123#-abc"); // true

// Uppercase Characters:
console.log(swap("AbC123") === "123AbC"); // true

Data Structures:
	- abcd123

	Things I need to do:
		- min length. If the current number is > the minLength, then we don't replace.
		- same with the letter value for the letter, can't be greater than the current place.

		- If it's not a letter or a number, we leave it the same.
		- If it's uppercase, we replace with a number. if it's a number and its corresponding is an uppercase
			, we replace with teh uppercase.
		- else, just replace.

		abcdefghijklmnopqrstuvwxyz
			letter value => indexOf + 1

		getLetter => LETTERS[number - 1] => 1 - 1 => 0, 'a'

		aBcd123 => 123daBc
			iterate through string.
			-a value is 1, replace with 1.
			-B value is 2, replace with 3.
			-c value is 3, replace with 3.
			-d value is 4, which is greater than the minLength of 3, do not replace.
			1 value is 'a', replace with 'a'
			2 value is 'B', replace with 'B' => if the string includes 'b', return it. Else, upcase it.
			3 value is 'c', replace with 'c'

		Dealing with casing:
			- if it's an uppercase letter needing to be replaced by number:
				- downcase every letter passed into that function.
			- If it's a number needing to replaced either by upcase or downcased char, 
				- check the string for which one is present and return based on that.

	else return char.
	if is digit and is greater than minLength... return char
	else if is letter and is greater than minLength... return char

aBcd123

Algo:
	1. Build a constant string of LETTERS.
	2. HELPER getLetterValue => number string
		a. Find the indexOf the letter passed in and add 1.
		b. If the value is greater than the minLength, return the char itself. else, return the value.
	3. HELPER getLetter => letter
		a. If the number is greater than the minLength, return the number instead.
		b. Pass in the number as an index and - 1 to it. Use it as an index on LETTERS.
		c. If the string includes the letter returned the string, return it. Else, return the uppercase.
	4. MAIN FUNCTION:
		a. Find the min length of alphanumeric characters.
			- HELPER: 
				take the lengths in an array and find the min from Math object.
		b. Replace all a-z0-9 characters with the return value of this next function:
	5. HELPER determineReplacement:
		a. If it matches a letter, then call the getLetterValue function.
		b. If it matches a number, then call the getLetter function
		c. Else, return the character itself.
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function getNumber(letter, minLength) {
	letter = letter.toLowerCase();

	const value = LETTERS.indexOf(letter) + 1;
	return value > minLength ? letter : value;
}

function getLetter(number, minLength, string) {
	if (number > minLength) return number;
	const letter = LETTERS[number - 1];

	return string.includes(letter) ? letter : letter.toUpperCase();
}

function getMinLength(string) {
	let letters = string.replace(/[^a-z]/gi, '');
	let numbers = string.replace(/[^\d]/g, '');

	return Math.min(...[letters.length, numbers.length]);
}

function swap(string) {
	const alphanumericRegex = /[a-z\d]/gi;
	const minLength = getMinLength(string);

	return string.replace(alphanumericRegex, char => {
		if (char.match(/[a-z]/i)) {
			return getNumber(char, minLength);
		} else {
			return getLetter(char, minLength, string);
		}
	})
}

console.log(swap("1a2b3c") === "a1b2c3"); // true

// Mismatched Lengths of letters and Numbers:	

console.log(swap("aBcd123") === "123daBc"); // true
	// 103daBc

console.log(swap("abcde1234") === "1234eabcd"); // true
console.log(swap("21a") === "2a1"); // true
console.log(swap("a1b") === "1ab"); // true
console.log(swap("1a2bc") === "a1b2c"); // true
console.log(swap("abc") === "abc"); // true
console.log(swap("12") === "12"); // true

// Edge Cases:

// Empty string
console.log(swap("") === ""); // true

// Other Characters:
console.log(swap("abc#-123") === "123#-abc"); // true

// Uppercase Characters:
console.log(swap("AbC123") === "123AbC"); // true
