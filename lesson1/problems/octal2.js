// Octal with Better Abstraction!
/*
This time, let's do split with map. Then reduce! This solution is very mechanical.
*/

const sum = digits => digits.reduce((sum, num) => sum + num);

function octalToDecimal(octalString) {
	const base = 8;
	
	const digits = octalString.split('');
	let power = octalString.length;

	let base10Digits = digits.map(digit => {
		power -= 1;
		return digit * (base ** power);
	})

	return sum(base10Digits);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9