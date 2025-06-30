/*
	Examples:
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

	Trying swap with an object to store indices.

	minLength is required.
	Uppercase / lowercase doesn't matter as much.
	reduce.

	Data Structures:
	console.log(swap("aBcd123") === "123daBc"); // true

	split and reduce:
	{char: determineIndex(char)}
	
	determineIndex:
		- check if it matches [a-z]i. If it does, then find the index of its value.
			find the value first:
			- a / A always map to 1. 
			- b / B always map to 2. etc etc.
			find the index of that value.

	{a: 4, B: 5, c: 6, d: 4, 1: 0, 2: 1, 3: 2} sort and join keys into a string.

Algo:
	1. Create the letters constant.
	2. MAIN FUNCTION:
		- also get minLength from here, take the lengths and get min of letters and numbers.
		a. Split and reduce the string.
		b. We want to create an object of different character keys and index values.
		c. Determine the index in a HELPER: getIndex
		d. Once we have this object, sort the keys based on their indices and join them into a string.
		e. Return that string.
	
	3. GET INDEX helper:
		a. if the character matches a letter, uppercase or lower, then we find its number value. get the index
			HELPER FindNumber takes a letter and the minLength.
				a. downcase the letter.
				b. Find the value with indexOf + 1 from the constant.
				c. return the letter if it's greater than the minLength, else return the number converted
		b. If the character matches a number find the letter associated with it. and get teh index
			HELPER findLetter, takes a number char, minLength, and the string itself.
				a. if this number coerced to number is greater than the minLength, return the number.
				b. Find the letter by taking the index of the number - 1.
				c. If the string includes the letter, return it. Else, return the uppercase version.
		c. If the character matches something else, return the indexOf itself.
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function getNumber(char, minLength) {
	char = char.toLowerCase();
	let number = LETTERS.indexOf(char) + 1;

	return number > minLength ? char : String(number);
}

function getLetter(char, minLength, string) {
	let number = Number(char);
	if (number > minLength) return char;

	let newVal = LETTERS[number - 1];
	return string.includes(newVal) ? newVal : newVal.toUpperCase();
}

function determineValue(char, minLength, string) {
	let value = char;

	if (char.match(/[a-z]/i)) {
		 value = getNumber(char, minLength);
	}
	else if (char.match(/[\d]/)) {
		 value = getLetter(char, minLength, string);
	}

	return value;
}

function getMinLength(string) {
	let letters = string.replace(/[^a-z]/ig, '');
	let digits = string.replace(/[^\d]/g, '');

	return Math.min(...[letters.length, digits.length]);
}

function swap(string) {
	const minLength = getMinLength(string);

	return string.split('').reduce((result, char) => {
		return result + determineValue(char, minLength, string);
	}, '')
}

console.log(swap("1a2b3c") === "a1b2c3"); // true

// Mismatched Lengths of letters and Numbers:	

console.log(swap("aBcd123")=== "123daBc"); // true
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