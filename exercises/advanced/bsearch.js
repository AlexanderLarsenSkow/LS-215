/*
input: array of values, and search term
output: return an index for the search term.

Rules:
	- linear search: checking each page for the name you're looking for.
	- binary search: cut data to be searched in half
	- Build a function that completes a binary search on an array, continually
		- building halves and discarding halves.
	- Taking a middle and determining the searchHalf by whether the middle is greater or less than 
		 the search term.
	- If the middle is equal to the search term, we return the middle index.

Questions:

Examples:

	// Yellow pages list of business names data:
	const yellowPages = ['Apple Store', 'Bags Galore',
	                     'Bike Store',  'Donuts R Us',
	                     'Eat a Lot',   'Good Food',
	                     'Pasta Place', 'Pizzeria',
	                     'Tiki Lounge', 'Zooper'];

	1. Retrieve middle value ('Eat a Lot')
	2. If middle value is equal to pizzeria, stop search.
	3. If middle value is less than Pizzeria, discard 1st half / search 2nd half
	4. Repeat Process! 
	
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6	
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Alice');  // 0	


binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6	
	- startPoint: 0, endPoint: last Index + 1
	- endPoint - startPoint / 2 => - 1 Ceil ^ => 3, 'Pete'

	Calculating a Strat Point + End Point:
		- at the beginning, the start point is 0 and the end point is length.
		- calculate halfIndex:
			halfway point: (endPoint - StartPoint) / 2 - 1 ceil ^ YES
			7 / 2 = 3.5 - 1 => 2.5 Math.ceil => 3

			if greater than
		- New Start Point: take halfIndex 3, add 1.
			4
		- New End Point: take halfIndex length.

		7 - 4 => 3 / 2 => 1.5 ceil ^ 2 => + (length - 1 - 3) (5)

			if less than
			- New Start Point: 0
			- New End Point: halfIndex
		0, 3
		



	'Pete' => startPoint middle Index + 1. => 4
	EndPoint => array.length - 1, 6

	6 / 2 - 1 + halfway index? 3 => 5

firstHalf => 
	index Calc:
		- OG length - current Length - currentIndex
			7 - 3 === 4 - 2 => 2

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
	- halfIndex => 3 'Pete'
	- 'Pete' < 'Peter'
	- take secondhalf as searchList
	- 'Rachel', 'Sue', 'Tyler' [0, 1, 2] length of 7 - 3 === 4 index + 4.

	- 1 => 'Sue' > 'Peter'
	- take firsthalf as searchList
	- Only includes 1 item. While the searchList has a length greater than 1.
	- If the search Term equals searchList[0], return 


Calculate index: The original length - the slice Length + the current index.

Data Structures:
	slice ()

	halfway point: array.length / 2 - 1
		7 / 2 = 3.5 - 1 => 2.5 Math.ceil

		10 / 2 = 5 - 1

	if the element at this middle index is greater than the search term,
		- take a slice from 0 to the search term. Exclusive, so it doesn't include it.
	if the element at this middle index is less than the search term,
		- take a slice from the middle index + 1 to the end.

	if the middle item = the search term, return the middle index outright.

	If we get to the end of the function, return - 1 as the search term wasn't present.

		Calculating a Strat Point + End Point:
		- at the beginning, the start point is 0 and the end point is length.
		- calculate halfIndex:
			halfway point: (endPoint - StartPoint) / 2 - 1 ceil ^ YES
			7 / 2 = 3.5 - 1 => 2.5 Math.ceil => 3

			if greater than
		- New Start Point: take halfIndex 3, add 1.
			4
		- New End Point: take halfIndex length.

		7 - 4 => 3 / 2 => 1.5 ceil ^ 2 => + (length - 1 - 3) (5)

		7 - 4 === 3. 
		3/ 2 === 1.5
		1.5 === 1.5 ^ 1 + 7 - start

			if less than
			- New Start Point: 0
			- New End Point: halfIndex
		0, 3

Algo:
	2. create a constant referencing the length of the input
	3. CALCULATE halfway point function: takes a current length, divides by 2, - 1, rounds result up.
	4. while the count is less than the divisionCount, helper function, do these things:
	5. Check element at the halfway point.
		a. If the element here is equal to the search term, return the index (OG array length - current
			length + current Index).
		b. if the element here is greater than the search term, calculate start / end indices as greater
		c. if the element here is less than the search term, calculate start / end indices as lesser
	6. At the end, if all iterations are complete, return - 1.
*/
function divideCount(length) {
	let count = 0;
	let division = length;

	while(division > 1) {
		division = Math.ceil(division / 2);
		count += 1;
	}

	return count;
}

function lowerHalf(length) {
	return Math.ceil((length - 1) / 2);
}

function upperHalf(length) {
	return lowerHalf(length) + length;
}

function binarySearch(list, searchTerm) {
	let length = list.length;
	const divisionCount = divideCount(length);

	let half = lowerHalf(length);

	for (let count = 1; count <= divisionCount; count += 1) {
		let len2 = length / 2;
		length = list.length % 2 === 0 ? Math.floor(len2) : Math.ceil(len2);
		
		if (list[half] === searchTerm) {
			return half;
		}
		else if (list[half] < searchTerm) {
			half = upperHalf(length);
		} else {
			half = lowerHalf(length);
		}
	}

	return -1;
}

// 5, 8

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6