function divideCount(number) {
	let count = 0;
	let division = number;

	while(division > 1) {
		division = Math.ceil(division / 2);
		count += 1;
	}

	return count;
}

console.log(divideCount(7));
console.log(divideCount(100)); // 50, 25, 13, 7, 4, 2, 1