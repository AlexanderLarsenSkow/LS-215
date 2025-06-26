/*
Prime Number Printer

input: string input
output: array of all prime numbers in string

Rules:
	- Take all numbers out of a string and return an array that is only filled with primes.
	- If there is an empty string, return an empty array
	- If tehre are no numbers, return an empty array
	- There can be negative numbers, do not add them to prime array. Also do not add the positive
		of that number.
	- No other inputs will be given.
	- There can be spaces.
	- 2 numbers together means they are a number.
	- 3 numbers together means they are a number. Numbers are delimited by non-number characters.
	- The order of the final array should be in ascending from smallest to largest.

Questions:
	- Can there ever be an empty string? What do I do with an empty input?
	- Will the argument ever be omitted? What happens in this case?
	- What do you do when there are no numbers in the string?
	- Will there ever be negative numbers in the string?
	- Can any other input be added other than a string?
	- Can there be spaces or words in teh string and what do we do in this case?
	- Can the input ever be an array of characters or strings instead of a string?
	- What do you do when there are no prime numbers in the string?
	- Can the string contain any number of characters?
	- If 2 numbers are together, does that mean they are always the same number? 1 and 3 together, 13?
	- if 3 numbers are together like 123, should 12 and 23 be together or is it 123?
	- What order should the numbers be in the final array? Should it be sorted or the order they are?
	- Can teh string contain negative numbers?


Rules:
	- Take all numbers out of a string and return an array that is only filled with primes.
	- If there is an empty string, return an empty array
	- If tehre are no numbers, return an empty array
	- There can be negative numbers, do not add them to prime array. Also do not add the positive
		of that number.
	- No other inputs will be given.
	- There can be spaces.
	- 2 numbers together means they are a number.
	- 3 numbers together means they are a number. Numbers are delimited by non-number characters.
	- The order of the final array should be in ascending from smallest to largest.

Examples:

// Generic Cases:
	console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
	console.log(primeNumberPrinter("a4bc2k13d15a17")); // [2, 13, 17]
	console.log(primeNumberPrinter("a4bc2k13d6abc, 23")); // [2, 13, 23]

// Negative Numbers
	console.log(primeNumberPrinter("a4bc-2k13d")); // [13]
	console.log(primeNumberPrinter("a4bc-2k-13da17")); // [17]

// larger Numbers
	console.log(primeNumberPrinter("a4bc2k123d")); // [2, 123]
	console.log(primeNumberPrinter("a4bc2k111d")); // [2, 111]

// Ordered
	console.log(primeNumberPrinter("a4b13c2kd")); // [2, 13]
	console.log(primeNumberPrinter("a17b4bc2k13d")); // [2, 13, 17]

// Empty String and No Numbers
	console.log(primeNumberPrinter("")); // []
	console.log(primeNumberPrinter("abcdefghijk")); // []

Data Structures:
	put numbers in an array
	match -?\d+

	'abcde2ab4a13' => [2, 4, 13] filter => prime

Algo:
	1. place all numbers, including negatives, in an array of matches.
	2. If there are no matches, return an empty array outright.
	3. determine if the numbers are prime or not.
		a. a number is prime if it is only divisible by itself and 1. => should have 2 multiples.
		b. Add all multiples to an array from 1 to itself.
		c. if teh array has more than 2 values in it, return false, else true.
	4. Filter out all non-prime and negative numbers.
	5. sort and return that final array.
*/

function isPrime(number) {
	let multiples = [];

	for (let count = 1; count <= number; count += 1) {
		if (number % count === 0) {
			multiples.push(count);
		}
	}

	return multiples.length === 2;
}

function primeNumberPrinter(string) {
	const numRegex = /-?\d+/g;
	let numbers = string.match(numRegex);
	if (!numbers) return [];

	return numbers.map(Number)
								.filter(isPrime)
								.sort((a, b) => a - b);
}

// Generic Cases:
	console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
	console.log(primeNumberPrinter("a4bc2k13d15a17")); // [2, 13, 17]
	console.log(primeNumberPrinter("a4bc2k13d6abc, 23")); // [2, 13, 23]

// Negative Numbers
	console.log(primeNumberPrinter("a4bc-2k13d")); // [13]
	console.log(primeNumberPrinter("a4bc-2k-13da17")); // [17]

// larger Numbers
	console.log(primeNumberPrinter("a4bc2k123d")); // [2]
	console.log(primeNumberPrinter("a4bc2k107d")); // [2, 107]

// Ordered
	console.log(primeNumberPrinter("a4b13c2kd")); // [2, 13]
	console.log(primeNumberPrinter("a17b4bc2k13d")); // [2, 13, 17]

// Empty String and No Numbers
	console.log(primeNumberPrinter("")); // []
	console.log(primeNumberPrinter("abcdefghijk")); // []
