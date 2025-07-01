/*
input: integer
output: next featured number greater than the integer

Rules:
	- Featured Number:
		- Odd number
		- Multiple of 7
		- digits must all be unique as well.
			- 133 is not a featured number for example, because 133 has two 3's. 77 as well.
		- Return 'There is no possible number that fulfills those requirements' if greater than
				9876543201

Questions:
	- good or bad inputs
	- limits to the number
	- 0?
	- NaN? Infinity? -Infinity? What do you do then?

Examples:
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

Data Structures:
	isFeatured Helper:
		isOdd and isMultipleOf7 and allDigitsUniq

	isOdd and multiple of 7 is self-explanatory.

	allDigitsUniq:
		- convert to string
		- split into array of digits
		- add digits to new array and only add if unique
		- join and convert to a number.
		- If this array is the same length as the original, then allDigitsAreUnique

	Algo:
		Start a for loop at the input number.
		Increment by 1 each time and return the count if it is ever a featured number.
			Is Featured Number:
				3 helpers:
				isOdd, easy
				isMultipleOf7, easy
				allDigitsUniq. Uniq the array and check its length against the original. algo ^
		Guard Clause: If the number is ever greater than 9876543201, return invalidMessage
			- "There is no possible number that fulfills those requirements."
		
	keep incrementing the for loop until a featured number is found.
*/

const isOdd = num => num % 2 === 1;

const isMultipleOf7 = num => num % 7 === 0;

function allDigitsUniq(number) {
	let digits = String(number).split('');
	let uniqDigits = [];

	digits.forEach(digit => {
		if (!uniqDigits.includes(digit)) {
			uniqDigits.push(digit);
		}
	})

	return digits.length === uniqDigits.length;
}

function isFeatured(number) {
	return isOdd(number) && isMultipleOf7(number) &&
		allDigitsUniq(number);
}

function featured(integer) {
	const invalidMessage = 'There is no possible number that fulfills those requirements.'
	const MAX_DIGIT = 9876543201;
	let count;

	for (count = integer + 1; !isFeatured(count); count += 1) {
		if (count > MAX_DIGIT) {
			return invalidMessage;
		}
	}

	return count;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
