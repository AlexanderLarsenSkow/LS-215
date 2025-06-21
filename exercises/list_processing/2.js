// Alphabetical Numbers

/*
	input: array of integers between 0 and 19
	output: new array but where each one is sorted based on the English word for each one.

	Rules:
		take the numbers
		sort them based on their string counterparts

	Example:
		alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0] eight first, zero last

Data Structures:
	object tracking each key and value
	then write a function that finds the key for both values: 2 number args
	return the first one - the second one.


Algo:
	create a constant tracking the numbers with their string counterparts
	HELPER
		- takes 2 args, 2 numbers
		- find both string values in the object,
			taking the keys in the array, find the key whose value is the same as the number
		- return the first minus the second.
		
	MAIN
		- pass the helper into the toSorted() call.
*/
const NUMBER_CODES = {
	zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
	eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
	fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
}

function findStringCode(number) {
	return Object.keys(NUMBER_CODES).find(num => number === NUMBER_CODES[num]);
}

function sortByCode(num1, num2) {
	let string1 = findStringCode(num1);
	let string2 = findStringCode(num2);

	if (string1 > string2) {
		return 1;
	}
	else if (string1 < string2) {
		return -1;
	} else {
		return 0;
	}
}

function alphabeticNumberSort(numbers) {
	return numbers.toSorted(sortByCode)
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]