// Sum of Digits

/*
input: integer
output: sum of all digits in integer

Rules:
	- take sum of digits
	- don't use for while or do while loops

Examples:
	sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

Data Structures:
	- convert to string, split into array, map array to be integers with parseInt
	reduce array

Algo:
	coerce to string
	split into array and map back to numbers
	reduce to sum
*/

const toInteger = digit => parseInt(digit, 10);

const sum = integer => {
	const digits = String(integer).split('').map(toInteger);
	return digits.reduce((sum, digit) => sum + digit);
}

console.log(	sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45