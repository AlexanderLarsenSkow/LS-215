function count(array, func) {
	return array.filter(func).length;
}

let numbers = [1, 2, 3, 4, 5];

console.log(count(numbers, num => num >= 3));

let text = 'The quick brown fox jumps over the lazy dog.';
let textArr = text.split(' ');

console.log(count(textArr, word => word.toLowerCase() === 'the'));