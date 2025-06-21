// Multiply All Pairs

/*
input: 2 arrays
output: new array containing all products of each combination of numbers from both arrs

Rules:
	- no empty arrays
	- sort the returned array in ascending order.

Examples:
	multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Data Structures:
	iterate through the entire thing for each value.
	for each value, iterate again through the second array and multiply each by each. Add the values
	to the new array.
	
Algo:
	- Iterate through the first array
	- for each value, iterate through the entire second array
	- take the product of these 2 numbers and add it to the new array
	- sort the new array in ascending order and return it.
*/

function multiplyAllPairs(firstNumbers, secondNumbers) {
	let products = [];
	
	firstNumbers.forEach(firstNum => {
		secondNumbers.forEach(secondNum => {
			products.push(firstNum * secondNum);
		})
	})

	return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]