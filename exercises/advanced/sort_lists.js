/*
input: 2 sorted arrays of numbers
output: a new array merge sorted.

Rules:
	- Merge the arrays into a new array. The merge sort should sort them.
	- You cannot use sorting methods to do this.
	- Don't mutate the input arrays
	- There can be multiple elements that are the same value. They should all be taken.

Examples:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
// 

Data Structures:
	Create copies of both arrays to mutate.
	while loop, where we go while the new array is less than the size of both input lengths together.
	reduce that checks for the smallest value out of both arrays.
	then find the first index of that value, splice it out.

Algo:
	1. Create copies of the two input arrays that can be mutated.
	2. Create a while loop that runs until the result array is the size of the two array lenghts together
	3. HELPER findSmallest, finds the smallest value.
		a. Create a min value starting at Infinity
		b. Iterate through both arrays, setting the min to that value IF the current element is lower than
			the min.
	4. Now that we have the smallest value, find the index and delete that value.
		HELPER delete smallest
			a. operate on the copy that includes the value.
			b. Find the index of the element.
			c. Splice the element out of the array.
	5. Continue and return the merge sort array.
*/

function findSmallest(copy1, copy2) {
	let min = Infinity;

	copy1.forEach(val => min = val < min ? val : min);
	copy2.forEach(val => min = val < min ? val : min);

	return min;
}

function remove(smallest, copy1, copy2) {
	let removable = copy1.includes(smallest) ? copy1 : copy2;
	let index = removable.indexOf(smallest);

	removable.splice(index, 1);
}

function merge(array1, array2) {
	let [copy1, copy2] = [array1.slice(), array2.slice()];
	let sortedResult = [];
	const resultLength = array1.length + array2.length;

	while (sortedResult.length < resultLength) {
		let smallest = findSmallest(copy1, copy2);
		sortedResult.push(smallest);

		remove(smallest, copy1, copy2);
	}

	return sortedResult;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]