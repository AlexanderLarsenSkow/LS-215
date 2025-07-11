/*
input: array
output: new array that has been merge_sorted.

Rules:
	- merge sort is recursive.
	- it breaks down an array's elements into nested subarrays.
	- Then it combines the nested subarrays back together in sorted order.
	- All values are same data types, either numbers or strings
	- Okay to use merge function from last problem.
	- no sorting methods.
	- can assume even numbered lengths for arrays.

Examples:
[9, 2, 7, 6, 8, 5, 0, 1] -->              // initial list

[[9, 2, 7, 6], [8, 5, 0, 1]] -->          // divide into two lists
[[[9, 2], [7, 6]], [[8, 5], [0, 1]]] -->  // divide each sub-array in two
// repeat until each sub-array contains only 1 value
[[[[9], [2]], [[7], [6]]], [[[8], [5]], [[0], [1]]]]

base case: 1 element in each subarray.

mergeSort([9, 5, 7, 1]);               // [1, 5, 7, 9]  [[9, 5], [7, 1]] => [[9], [5], [7], [1]]
mergeSort([5, 3]);                     // [3, 5] => [[3], [5]] => [3, 5]
mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
mergeSort([9, 2, 7, 6, 8, 5, 0, 1]);   // [0, 1, 2, 5, 6, 7, 8, 9]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

Data Structures:
	if the length of the array is greater than 1, divide into subarrays.
	if less than half of the length, add that side to first array. If not add to second array.
	
Algo:
	1. If the array.length > 1, then we divide the array in 2. Create 2 subarrays here.
		a. Create a forEach iteration with an index. If the index is less than half the length,
			- add to first subarray
		b. If index is greater than half the length of the big array, add to second subarray.
	2. else the array length is 1 and we return the merge function with both arrays.
*/

function findSmallest(copy1, copy2) {
	let [value1, value2] = [copy1[0], copy2[0]];

	if (value1 === undefined) return value2;
	if (value2 === undefined) return value1;
	
	return value1 <= value2 ? value1 : value2;
}

function remove(smallest, copy1, copy2) {
	let removable = copy1.includes(smallest) ? copy1 : copy2;
	removable.splice(0, 1);
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

function mergeSort(array) {
	if (array.length === 1) return array;

	let [subarr1, subarr2] = [[], []];
	const halfway = array.length / 2;

	array.forEach((element, index) => {
		if (index < halfway) {
			subarr1.push(element);
		} else {
			subarr2.push(element);
		}
	})

	let merge1 = mergeSort(subarr1);
	let merge2 = mergeSort(subarr2);


	return merge(merge1, merge2);
}

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                     // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
// console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   // [0, 1, 2, 5, 6, 7, 8, 9]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]