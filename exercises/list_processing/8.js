// Grocery List

/*
	input: 2-d array
	output: 1-d array

	Rules:
		- every subarray has a fruit and a number
		- in the result array, return the fruit string repeated by the number.

	Examples:
		buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
		// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
		should be separate elements!

	Data Structures:
		map problem. Map the array, repeat the first element by the number in the second.

	Algo:
		map the array
		return the string (first index) by repeating it by the number (second index)
		return it
*/

function buyFruit(groceryList) {
	return groceryList.reduce((resultList, fruitInfo) => {
		let count = 0;
		let max = fruitInfo[1];

		while (count < max) {
			resultList.push(fruitInfo[0]);
			count += 1;
		}

		return resultList;
	}, [])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]