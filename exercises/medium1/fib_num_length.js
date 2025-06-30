/*
input: number representing number of digits.
output: index of the first fib number that has this length.

Rules:
	- Fibonnaci Numbers start at 1, 1 and add the numbers together, creating
		concurerrently higher numbers. 1 1 => 1, 2 => 2, 3 => 3, 5 => 5, 8 => 8, 13 => 13, 21
	- Fib index starts at 1. For example: 1, 1 => indices (1, 2)
	- Argument is always an integer greater or equal to 2.
	- Return the index of the fib number that is first number that is the length of the 
		input number. So, for example, 2n => 7n, 1 1 2 3 5 8 13 (13 is two digits and is index of 7).

Questions:

Examples:
	console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
	console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
	console.log(findFibonacciIndexByLength(10n) === 45n);
	console.log(findFibonacciIndexByLength(16n) === 74n);
	console.log(findFibonacciIndexByLength(100n) === 476n);
	console.log(findFibonacciIndexByLength(1000n) === 4782n);
	console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

Data Structures:
	While loop with 2 number variables. We go while both are less than.
	break point? : String()

Algo:
	1. While the length of either number converted to a string is less than the input number. 
		must also be converted to BigInt
	2. Add num1 and num2 together. If the index is odd, then set num1 to num1 + num2.
	3. Else, set num2 to num1 + num2.
	4. When it breaks, return the index, which has incremented each iteration. 
*/

const bigIntLength = num => BigInt(String(num).length);

function findFibonacciIndexByLength(length) {
	let [num1, num2] = [1n, 1n];
	let index = 2n;

	while(bigIntLength(num1) < length && bigIntLength(num2) < length) {
		if (index % 2n === 0n) {
			num1 += num2;
		} else {
			num2 += num1;
		}

		index += 1n;
	}

	return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
