/*
input: input is an index
output: output is the fib number that corresponds to that index.

Rules:
	- Return the index given that fib number

Questions:

Examples:
console.log(fibonacci(3)); // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

Data Structures:

Algo:
	1. If the index is less than or equal to 2, return 1.
	2. while a count variable is less than the index given, add num1 and num2 together.
	3. Num1 should be added when count is odd
	4. num2 should be added when count is even
	5. Add 1 to the count.
	6. return the number1 if count is odd, else return num2.
*/

const isOdd = number => number % 2 === 1;

function fibonacci(index) {
	if (index <= 2) return 1;
	let [num1, num2] = [1, 1]

	let count = 2;

	while(count < index) {
		count += 1;

		if (isOdd(count)) {
			num1 += num2;
		} else {
			num2 += num1;
		}
	}

	return isOdd(count) ? num1 : num2;
}

console.log(fibonacci(3)); // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
