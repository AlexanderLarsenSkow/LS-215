/*
input: array of integers
output: return 3rd largest integer in array

Rules:
	- Return the 3rd largest number in the array.
	- If the 3rd largest doesn't exist, return the largest.
	- Sorting is not allowed.
	- if the array is empty, return null
	- If no argument, return null
	- If less than 3 numbers, return largest.
	- Treat negative numbers and 0 as regular numbers.
	- If the array has NaN, return NaN.

Questions:
	- What should I do if the array is empty? RETURN NULL
	- What should I do if no argument is given? RETURN NULL
	- What should I do if there is only 1 integer in the array? RETURN THE INTEGER
	- Can I expect that the array will ever have decimal or floating point numbers? What do I do?
	- Will the array ever have other types of elements, like strings? What do I do?
	- Will another value, like a string or object, ever be input instead of the array? BAD INPUT
	- Can the array have an unlimited number of elements?
	- What should I do if there are more arguments?
	- Can the array be sparse? What should I do if the array is sparse or has object properties?
	- Can the array ever contain negative numbers or 0? How should that be handled?
	- Will the array ever contain NaN?
	- Will the array ever contain Infinity or -Infinity?
	- Does the order of the array affect the result in any way?
	- Will the array have repeat numbers? How will this affect the result?

Rules:
	- Return the 3rd largest number in the array.
	- If the 3rd largest doesn't exist, return the largest.
	- Sorting is not allowed.
	- if the array is empty, return null
	- If no argument, return null
	- If less than 3 numbers, return largest.
	- Treat negative numbers and 0 as regular numbers.
	- If the array has NaN, return NaN.


Examples:
	// Generic Cases
	console.log(thirdMax([3, 2, 1])); // 1
	console.log(thirdMax([3, 2, 1, 4, 10])); // 3
	console.log(thirdMax([10, 20, 30, 40])); // 30

	// Edge Cases:
	
	// 3rd largest doesn't exist
	console.log(thirdMax([3, 2])); // 3
	console.log(thirdMax([3])); // 3

	// Negative Numbers and Zero
	console.log(thirdMax([-3, -2, -1])); // -3
	console.log(thirdMax([-10, -5, 0, 10])); // 0

	// Empty Array
	console.log(thirdMax([])); // null

	// No argument
	console.log(thirdMax()); // null

	// NaN
	console.log(thirdMax([3, 2, NaN])); // NaN
	console.log(thirdMax([NaN, 1])); // NaN

Data Structures:
	guard clause at start
	filter out a max with Math.max
	while maxCount variable is less than 3, continue to find a new max and filter by it.

	if at any point we get an emtpy array, return the most recent max.

	Algo:
		High Level:
		1. return null if the array is empty or if it is not passed into the function.
		2. Declare a maxCount variable = 0. While it is less than 3, take the current max from teh array.
		3. Filter out the max and increment the maxCount variable. Repeat the loop.
			- If at any time, the array is empty after filtering, return max.
		4. If the maxCount is equal to 3, return the most recent max.
*/


// If you need to get rid of duplicate values, this function accomplishes that.
function getUniqueIntegers(integers) {
	const count = (integers, value) => integers.filter(val => val === value).length;
	return integers.filter(int => count(integers, int) === 1);
}

function thirdMax(integers) {
	if (!integers || integers.length === 0) return null;
	if (integers.length < 3) return Math.max(...integers);

	let maxCount = 1;
	let loseMax = integers;

	while (maxCount <= 3) {
		let currentMax = Math.max(...loseMax);
		loseMax = loseMax.filter(num => num !== currentMax);

		if (loseMax.length === 0 || maxCount === 3) return currentMax;

		maxCount += 1;
	}
}

	// Generic Cases
	console.log(thirdMax([3, 2, 1])); // 1
	console.log(thirdMax([3, 2, 1, 4, 10])); // 3
	console.log(thirdMax([10, 20, 30, 40])); // 20

	// Edge Cases:
	
	// 3rd largest doesn't exist
	console.log(thirdMax([3, 2])); // 3
	console.log(thirdMax([3])); // 3

	// Negative Numbers and Zero
	console.log(thirdMax([-3, -2, -1])); // -3
	console.log(thirdMax([-10, -5, 0, 10])); // -5

	// Empty Array
	console.log(thirdMax([])); // null

	// No argument
	console.log(thirdMax()); // null

	// NaN
	console.log(thirdMax([3, 2, NaN])); // NaN
	console.log(thirdMax([NaN, 1])); // NaN

