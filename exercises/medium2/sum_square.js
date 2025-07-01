/*
input:
output:

Rules:
	- Return difference between (square of sum of first n positive n integers)
		and the (sum of the squares of the first positive n integers)
	- Part One is sum square
	- Part Two is square sum
	- Have to increment up to the final number and get an array of numbers.

Questions:

Examples:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
	6 ** 2 === 36 
	36 - 14 === 22
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0 => 1 ** 2 === 1, - 1**2 === 0
console.log(sumSquareDifference(100));    // 25164150

Data Structures:
	[1, 2, 3] => pass this into sumSquare and squareSum xd
		- reduce for summing, map for transforming.
		- Math.pow! Woo

Algo:
	1. Increment from 1 to the input number.
	2. Add each number to an array of numbers.
	3. Return the difference between 2 helpers, sumSquare and squareSum

	4. sumSquare Helper, array arg => square of sum
		a. sum the array with reduce.
		b. Then return the 2nd power of that result.

	5. squareSum Helper, array arg => sum of squares
		a. map the array by the 2nd power of each number
		b. sum the result.

	final helper: sum with reduce, since we need it twice.
*/

const sum = numbers => numbers.reduce((total, num) => total + num);

function squareSum(numbers) {
	let total = sum(numbers);
	return total ** 2;
}

function sumSquare(numbers) {
	let squares = numbers.map(num => num ** 2);
	return sum(squares);
}

function sumSquareDifference(number) {
	let numbers = [];
	for (let count = 1; count <= number; count += 1) {
		numbers.push(count);
	}

	return squareSum(numbers) - sumSquare(numbers);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0 => 1 ** 2 === 1, - 1**2 === 0
console.log(sumSquareDifference(100));    // 25164150
