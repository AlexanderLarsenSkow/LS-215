function myReduce(array, func, initial) {
  if (initial === undefined) initial = array[0];
	let accumulator = initial;

	array.forEach(function(element, index, arr) {
		if (initial === undefined && index === 0) return;
		accumulator = func(accumulator, element, index, arr);
	})

	return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

// returns word with most characters

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"