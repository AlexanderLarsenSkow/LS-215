let min = Infinity;
let max = -Infinity;

let getMinMax = function(value) {
	if (value >= max) {
		max = value;
	}

	if (value <= min) {
		min = value;
	}
}

let nums = [4, 5, 12, 23, 3]

nums.forEach(getMinMax);
[1, 2, 3].forEach(getMinMax);

console.log(min, max);           // 3 23