/*
input:
output: array of numbers

Rules:
	- Given a list of numbers in a short hand range, return a complete list of numbers
	- This is a shorthand, which seems they are using the last digit of the whole number...
	- If separated by a : - or .., this is a range of numbers.
	- Range limits are always inclusive.
	- 1 - 3 => 1, 2, 3
	- "1 - 3, 1 - 2" is two different ranges, returning 1, 2, 3 and 11, 12

	- Possible Separators: ["-", ":", "..",]

Assumptions:

Questions:

Examples:
	- short hand range, 1 3 7 2 4 1 => [1, 3, 7, 12, 14, 21], always taking last digit.
	-  "1-3, 1-2", "1:3, 1:2", "1..3, 1..2 => [1, 2, 3, 11, 12]

	"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
	"1-3, 1-2" --> 1, 2, 3, 11, 12 => 1-3 => 1, 2, 3, 1 - 2 => 11 and 12
	"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12, / 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
	"104-2" --> 104, 105, ... 112
	"104-02" --> 104, 105, ... 202
	"545, 64:11" --> 545, 564, 565, .. 611

// Generic Cases:

// No Ranges:
console.log(shortHandRange('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]
console.log(shortHandRange('1, 1, 1')); // [1, 11, 101]
console.log(shortHandRange('5, 6, 2, 8')); // [5, 6, 12, 18]

// Basic Ranges:
console.log(shortHandRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(shortHandRange("104-2")); // // [104, 105...112]
console.log(shortHandRange('5-7')); // [5, 6, 7]
console.log(shortHandRange('5-7, 5-7')); // [5, 6, 7, 15, 16, 17]

// Multiple Ranges:
	// 1 - 5 - 2
console.log(shortHandRange("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(shortHandRange('7..8..2..3')); // [7, 8, 9, 10, 11, 12, 13]

// Hundreds Difference:
console.log(shortHandRange("104-02")); // [104, 105... 202]
console.log(shortHandRange('545, 64:11')); // [545, 564, 565... 611]

Data Structures:
	split the string into an array. split by commas, since this determines the different values.
	The most crucial value is the first number.
	('1, 3, 7, 2, 4, 1') => ['1', '3', '7', '2', '4', '1']
		At this point, we have an array of string numbers. Our range starts at 1.

	With Range:

	"1-3, 1-2"	=> ['1-3', '1-2']
		if - is present, we call a function that deals with this.
		Basically iterating from that first number to the last. However... the tricky part is
			that the first range will determine the value of the second.

			[1, 2, 3, 11, 12]
			3 => 4 => 5 => 6 => 7 => 8 => 9 => 10 => String(11) => '11'[1] === '1'
			
			Doesn't work in this case:
				104-02 => 104, 105... String('112') === '02'[1], problem. So a slice:
					String(202) => '202'.slice(string.length - range.length), range.length (2))


		Finding the next number in the sequence is a challenge.
			1. Start at the first number. Example: '1 - 3' => first number is '1'.
			2. Check for range delimiter: - is present, include 2 and 3.
			3. Know to stop at the next number!!! => '3' === String(3) How? In this case, it's a 0th place
				so, 3 + 0... , then call String function and we got it.
			4. Go to next value in array. '1 - 2'.
			5. Continue iterating until we reach 10. At this point, we add a place to the ten's place var.
			6. Find 11, which is equivalent to 1 + tens place (10) => 11. 11 is next number
			7. Next we need to add 12 and stop. => Number('2') + tensPlace is equivalent to 12, add and stop.

			So a numberTracker variable is essential here as we count up.

		console.log(shortHandRange("104-02")); // [104, 105... 202]
			=> startNum === 104. Count up. What is numberTracker here? 200?
			Number('02') => 2 + 200 === 202, stop.
		
			Finding this variable is the hardest part. It could get infinitely tricky with larger 0's.

		'104 - 02'

		['104 - 02', 03] If a range Character is in the first element, we have to split by that range char.
		[
			['104', '02'] =>
				]

			Start Number is 104. => 105 => 106 and we keep going until we find a string version of the number
				that includes the next value.

		'101, 104 - 02'

		['101', '104 - 02']
		
		First Number: 101.
		[	'101', 
			['104', '02'] => 101 => 102 => 103 => 104 (newStart) => 104 => 105 ... =>  includes '02'
		]

First step is to find all the numbers. That's the hard part of this problem. Iterate up and 
	replace the number with the string version if it includes that string version.

	so like, 
		1 3 7 2 4 1 => 1, 3, 7, 12, 14, 21 EASY.

		['1', '3', '7', '12', '14', '21'] => only commas, so we add each one to the final array.
			- map probably.
		
		in the case of a range, we add all those values from the first to the last.
		in the case of a 3 range, we can ignore the first one and take the last one.

		at that point, then we can split based on commas and whatnot. If it's just a number
		if the string includes -:.. , then range do a new helper that calculates that range.
			- if not, add the Number version.
		The array is our return value.

	Algo:

	Remove ShortHand
		1. First, split the string of numbers into an array based on its , delimiter.
		2a. If no range delimiter, take the first number. This is the starting Number.
		2b. If any range delimiter is inside the current number, split further by that delimiter.
		3b. Take the first number from this split. This is the start number.
		4. Iterate through the string. When we find a number that, when converted to a string, is included
			in the current string, we replace the current number with its full version.
		5. While iterating, use a for loop to iterate from the start number. This is how we tell
			what to replace with. This is a replace thing.
		6. When should the range end? Maybe take an end as well.

	Main Function:
		1. iterate through the strings. split by commas and map the array.
		2. If the current value only includes digits, return the digit convered to a number.
		3. If not, this is a range and we need to return an array of numbers.
		4. HELPER determineRange: => takes a string 1:5, for example, returns array.
			a. split by either : - or ..
			b. take the first digit and convert to a number. This is the starting point.
			c. Add every number from this number to the next number.
			d. Then, if there's a final number, do the same thing.
		5. After getting the array of numbers /arrays, flatten the array and return it.
*/

const RANGE_DELIMITERS = /([:\-]|\.\.)/;

function getFirstDigit(range) {
	const nonDigit = /[^\d]/g;
	
	let numbers = range.split(', ');
	let start = numbers[0];

	if (start.match(nonDigit)) {
		let arr = start.split(RANGE_DELIMITERS);
		console.log(arr);
		start = arr[0];
	}

	return start;
}

function firstOccurrence(strNum, range) {
	let firstIdx = range.indexOf(strNum);
	let secondIdx = 0;
	let count = 0;

	let arr = range.split(',');

	// console.log(arr);

	
}

function removeShortHand(start, range) {
	return range.replace(/[\d]/g, digit => {

		for (let count = Number(start); count < Infinity; count += 1) {
			let strNum = String(count);
			// firstOccurrence(strNum, range);

			if (strNum.includes(digit)) {
				start = strNum;
				return strNum;
			}
		}
	})
}

function shortHandRange(range) {
	const start = getFirstDigit(range);
	let longHand = removeShortHand(start, range);
	console.log(longHand);
}

// No Ranges:
// console.log(shortHandRange('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]
// console.log(shortHandRange('1, 1, 1')); // [1, 11, 21]
// console.log(shortHandRange('5, 6, 2, 8')); // [5, 6, 12, 18]

// // Basic Ranges:
// console.log(shortHandRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
// console.log(shortHandRange("104-2")); // // [104, 105...112]
// console.log(shortHandRange('5-7')); // [5, 6, 7]
// console.log(shortHandRange('5-7, 5-7, 5-7')); // [5, 6, 7, 15, 16, 17, 25, 26, 27]

// // Multiple Ranges:
// 	// 1 - 5 - 2
// console.log(shortHandRange("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(shortHandRange('7..8..2..3')); // [7, 8, 9, 10, 11, 12, 13]

// // Hundreds Difference:
console.log(shortHandRange("104-02")); // [104, 105... 202] '202' includse '02'
// console.log(shortHandRange('545, 64:11')); // [545, 564, 565... 611]
