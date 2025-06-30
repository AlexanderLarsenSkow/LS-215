/*
input:
output:

Rules:
	- Fib numbers are added together to get continuously larger numbers.
	- F(1) = 1, f(2) = 2. f(3) = 3 (2 + 1), f(4) = 5 (3 + 2) etc.
	- Base Case and calling itself.

Examples:
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

fibonacci(3) => return num1 + fibonacci(num1 + num2)

Data Structures:
	- Recursive function call where we call the function on itself for each iteration.	
	- 2 numbers, num1 and num2.
	- Base Case should be if the number is that index.

	- If we ever get that index, then we return the sum.
	- If not, we add the sum together continuously.

Algo:
	- if 
*/

function fibonacci(index) {
	if (index <= 2) {
		return 1;
	} else {
		return fibonacci(index - 1) + fibonacci(index - 2);
	}
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
