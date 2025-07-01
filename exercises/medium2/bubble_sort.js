/*
input: array
output: bubble sorted array, same array

Rules:
	- bubble sort:
		- makes multiple passes through a collection
		- on each pass each consecutive pairs of elements are compared
		- if first value is greater than second, they are swapped.
		- the bubble sort makes continuous passes until no swaps are made on a pass. Then the sort is 
			complete.

Questions:

Examples:
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

Great!

Data Structures:
	This seems simple.

	So, Iterate through the array and continuously check each value against the next.
	Use every to check a copy to see if the values are exactly the same. If they are, return the 
		mutated array.

Algo:
	1. Create a variable set to an empty array.
	2. iterate through the array with forEach and an index.
	3. If the index is equal to 0, reset the variable to reference a copy of the input array.
	4. Check the current value against the next value. If the current value is greater than the next,
		set the current value to the next and the next value to the current with destructuring syntax.
	5. At the end, return the array if the copy has all the same element positions as the mutated array
		after iteration.

	Addendum:
		Wrap the entire function, save for the copy declaration, in a while loop.
			While the 
	
	5. HELPER:
			input: input array and copy from iteration.
			return: true or false.
		a. Iterate through the array with every and an index.
		b. If every element is equal to their counterpart at the same index in hte copy array, return true.

*/

function allSamePositions(array, copy) {
	return array.every((el, index) => el === copy[index]);
}

function bubbleSort(array) {
	let copy = [];

	array.forEach((_, index, arr) => {
		if (index === 0) copy = arr.slice();

		if (arr[index] > arr[index + 1]) {
			[arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
		}
	})

	if (allSamePositions(array, copy)) {
		return array;
	} else {
		return bubbleSort(array);
	}
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
