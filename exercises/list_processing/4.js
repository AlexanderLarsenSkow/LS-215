// Sum of Sums

/*
	input: array of numbers
	output: return sum of sums

	Rules:
		sum of sums: sum of each subseqent sub-group in the array
		sum these together.

	Examples:
		sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
		sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
		sumOfSums([4]);              // 4
		sumOfSums([1, 2, 3, 4, 5]);  // 35

	Data Structures:
		have to take iterate through an increasing part of the array.
		could also map the array based on the sum, then reduce that. Might be more complex.
		Mechanical... so taking a sumOfSums result might be useful.
		Take a count that increases for the slice. Slice starts at 1 and increase each time. Add to total.

	Algo:
		- Create a for loop that initializes a count to 1. should run while count is
			is less than or equal to the size of the array
		- Iterate over the slice, adding to the total at each increment.
		- THe slice should always start at 0.
		- add each value in the slice to the total.
		- the count should increment by 1 each time.
		- Return the total
*/

function sumOfSums(numbers) {
	let total = 0;

	for (let index = 1; index <= numbers.length; index += 1) {
		numbers.slice(0, index).forEach(num => total += num);
	}

	return total;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));        // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

