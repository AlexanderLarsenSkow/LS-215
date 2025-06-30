/*
input: digits number, and a number, which reps digits to rotate
output: a number rotated based on the number of digits to rotate.

Rules:
	- Rotate the nth digit to the end.
	- When n is 1 digit, the number stays the same.
	- The rotation only affects the nth digit of the number.
	-Find the nth digit and then place it at the end, reconverting to a number.
	- If the provided number is greater than the length of digits, then take the highest digit.

Questions:
	- will numbers always be 6 digits?
	- will both args always be provided?
	- will a number always be provided?
	- what happens if the second argument is 0 or negative?
	- What happens when the second number is not provided?
	- Will the input number ever be greater than the number's digits length? If so, what do we do?

Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291
	- stays the same, 1 is the last digit which stays at the end.

console.log(rotateRightmostDigits(735291, 2));      // 735219
	- 9 goes to the end

console.log(rotateRightmostDigits(735291, 3));      // 735912
	- 2 goes to the end

console.log(rotateRightmostDigits(735291, 4));      // 732915
	- 5 goes to the end

console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

console.log(rotateRightmostDigits(1234), 4); // 2341
console.log(rotateRightmostDigits(1234), 3); // 2413
console.log(rotateRightmostDigits(1234), 2); // 1243
console.log(rotateRightmostDigits(1234), 1); // 1234


2
735291 => 735219
1 goes left
9 goes right?

Data Structures:
	- Find the nth digit.
	- convert it to a string, then to an array of digits with split('').
	- array.length - n
		6 - 1 => 5
	
		- take a first and rest with slice then join and reconert to a number.

	Algo:
		2. Convert the number to a string then split it into an array of characters.
		3. Find the correct index with array length - the number n.
			- If the number n is greater than the length of the array, set n to the length.
		4. Splice this value out of the array
		5. Rejoin the arrays with concat, placing the spliced array at the end.
		6. Join the array into a string and conert to a number, return this.
*/

function rotateRightmostDigits(digits, n) {
	let array = String(digits).split('');
	const length = array.length;
	if (n > length) n = length;

	let nIndex = array.length - n;
	const nthDigit = array.splice(nIndex, 1);

	return Number(array.concat(nthDigit).join(''));
}


// Provided
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// My Own
console.log(rotateRightmostDigits(1234, 4)); // 2341
console.log(rotateRightmostDigits(1234, 3)); // 1342
console.log(rotateRightmostDigits(1234, 2)); // 1243
console.log(rotateRightmostDigits(1234, 1)); // 1234

// Greater Than
console.log(rotateRightmostDigits(1234, 5)); // 2341
