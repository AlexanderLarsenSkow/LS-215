/*
input: number
output: the number maximally rotated.

Rules:
	- We're taking the maximum rotation of the number
	- The maximum rotation of a single digit number is 1.
	- The rotation always starts at the first digit, which is the length of the array n in the helper
	- We rotate and continue rotating until we get to the end.
	- Go down from the length all the way to 1.

Questions:

Examples:
	- 735291 becomes 352917, 7 goes to the end.
	- 1st digit sticks in place. => 352917 becomes 329175
	- first 2 digits stick. => 329175 becomes 321759
	- first 3 digits stick. => 321759 becomes 321597
	- first 4 digits stick. => 321597 becomes 321579
	- This is a max rotation.

	console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


Data Structures:
	- need a length, so a string would be useful.
	Use while loop and pass in number, resetting its value each time and returning that at the end.
	while loop goes until hte length is 1. 
	- A number must be passed in.

Algo:
	1. Convert the number to a string and get the length.
	2. Create a rotation variable to reference the number.
	3. While the length var is greater or equal to 1, set the rotation var equal to the maxRotation call,
		passing in the new number each time as well as the length variable.
	4. Return the final rotation.

// 
// */

function rotateRightmostDigits(digits, n) {
	let array = String(digits).split('');
	const length = array.length;
	if (n > length) n = length;

	let nIndex = array.length - n;
	const nthDigit = array.splice(nIndex, 1);

	return Number(array.concat(nthDigit).join(''));
}

function maxRotation(number) {
	const length = String(number).length;
	let rotation = number;

	for (let count = length; count >= 1; count -= 1) {
		rotation = rotateRightmostDigits(rotation, count);
	}

	return rotation;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
