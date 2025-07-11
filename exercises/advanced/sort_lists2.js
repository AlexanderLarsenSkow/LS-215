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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]