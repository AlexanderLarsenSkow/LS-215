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

		1 number? 10's place.
		2 numbers? 100's place
		3 numbers? 1000's 

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


	Algo:
		1. First, split the string of numbers into an array based on its , delimiter.
		2a. If no range delimiter, take the first number. This is the starting Number.
		2b. If any range delimiter is inside the current number, split further by that delimiter.
		3b. Take the first number from this split. This is the start number.

		4. Go from the start Number and increment up. If there is a range delimiter, add the numbers 
			to the final list array.
		5. If no range delimiter, do not add the numbers.
		6. Once we get to the end of the range, we want to stop adding numbers.
			- how to stop? String(currentNumber) includes the end range string.


*/

// No Ranges:
console.log(shortHandRange('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]
console.log(shortHandRange('1, 1, 1')); // [1, 11, 21]
console.log(shortHandRange('5, 6, 2, 8')); // [5, 6, 12, 18]

// Basic Ranges:
console.log(shortHandRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(shortHandRange("104-2")); // // [104, 105...112]
console.log(shortHandRange('5-7')); // [5, 6, 7]
console.log(shortHandRange('5-7, 5-7, 5-7')); // [5, 6, 7, 15, 16, 17, 25, 26, 27]

// Multiple Ranges:
	// 1 - 5 - 2
console.log(shortHandRange("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(shortHandRange('7..8..2..3')); // [7, 8, 9, 10, 11, 12, 13]

// Hundreds Difference:
console.log(shortHandRange("104-02")); // [104, 105... 202] '202' includse '02'
console.log(shortHandRange('545, 64:11')); // [545, 564, 565... 611]
