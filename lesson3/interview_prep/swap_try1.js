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
	string => 'abcdefghijklmnopqrstuvwxyz'
		take an index from this value.

	getValue => LETTERS.indexOf(letter) + 1;

	iterate through the string, replacing 

	length of letters vs. numbers matter. We need to find indices for letters
	 	and numbers.

	return an object, that has the letters and number strings with associated indices?

	New approach:
		- Take each character and build an object where keys are the characters and
			indices are the values.
		- Sort the keys based on the index values and join that string together:

		'a21' => { a: 2, 2: 1, 1: 0 }

	Other concerns:
		- first, taking lengths. Basically replace all nondigits to get length
		- then replace all nonletters to get letter length.
		- we only replace the shortest length.
		- In essence, create a while loop that goes up to the shortest length.
		- Iterating through the string, adding values to the object.
			- 'a' => letterValues.a = string.indexOf(letterValue('a')) 


Algo:
	1. Create a letters constant that is a string.
	2. Create a helper function => number
		a. this should take a letter char and return the index of that letter + 1.
		b. This gets the value of the number.
	3. In the main function, return a replacement of the string if it matches alphanumeric characters,
		including uppercase characters.
	4. In the callback for replace, if the character matches a letter character, replace that char
		with the value of that letter value function. (downcase the letter here.)
	5. If the character matches a digit, however, replace it with its counterpart in the constant,
		minus 1.
	6. else, return the regular character.
	7. return the replacement.
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const letterValue = letter => LETTERS.indexOf(letter) + 1;

const getLetter = (string, digit) => {
	let index = Number(digit) - 1;
	let lowercaseLetter = LETTERS[index];
	
	if (string.includes(lowercaseLetter)) {
		return lowercaseLetter;
	} else {
		return lowercaseLetter.toUpperCase();
	}
}

function determineMinLength(string) {
	let letters = string.replace(/[^a-z]/gi, '');
	let digits = string.replace(/[^\d]/g, '');

	return Math.min(...[letters.length, digits.length]);
}

function swap(string) {
	const alphanumericRegex = /[a-z\d]/gi;
	const minLength = determineMinLength(string);

	return string.replace(alphanumericRegex, char => {
		if (/[^a-z\d]/i.test(char) || letterValue(char) === minLength ||
			LETTERS.indexOf(char) === minLength) {
			return char;
		}

		if (/[a-z]/i.test(char)) {
			return letterValue(char.toLowerCase());
		}
		else if (/[\d]/.test(char)) {
			return getLetter(string, char);
		} else {
			return char;
		}
	})
}

console.log(swap("1a2b3c")) //=== "a1b2c3"); // true

// Mismatched Lengths of letters and Numbers:	

console.log(swap("abcd123") === "123dabc"); // true

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
console.log(swap("AbC123")) //=== "123AbC"); // true, numbers should be replaced by uppercase characters.
