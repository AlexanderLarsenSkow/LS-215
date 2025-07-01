/*
input: 3 lengths representing triangle side lengths
output: string for type of triangle.

Rules:
	-Types of triangles:
		- Equilater: all sides equal
		- isosceles: 2 sides equal, 1 different
		- scalene: all 3 sides different

		- Valid triangle:
			- 2 shortest sides must be greater than longest side.
			- Every side must be greater than 0.

	- Return Values:
		- 'equilater'
		- 'isosceles'
		- 'scalene'
		- 'invalid'

Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
//

Data Structures:
	- check is any side is 0
	- check if 2 shortest sides are greater than longest side.
	- Array of values. Rest parameter.

	Array Methods:
		unique the array. 

		- some for 0
		- filter out max, check if remaining values are greater than the max.

		- If every side is equal, equilateral => array[0] * 2 === array[1] + array[2]
		- If 2 sides equal but 3rd is not, isosceles
		- If no sides equal, scalene.

		3, 3, 1.5

	Algo:
		1. Check if the triangle is INVALID
			HELPER: => true / false
				a. If any side is 0, return true.
				b. OR badSides
				c. HELPER => true / false
					d. sort the array in descending value and take first value as max.
					e. Return true if the other 2 sides are less than that value, true otherwise.
					f. Check if the other 2 sides are less than the max. Then invalid.
		2. If not invalid, go into a conditional logic.
			- UNIQUE HELPER:
				- add values to new array.
				- If value is present in new array, don't add it.
				- return this array.
		3. If equilateral, all sides uniqued === 1.
		4. If isosceles, all sides uniqued === 2
		5. If scalene, all sides uniqued === 3.
		6. return the string for each possible value.
*/

function sideIsZero(sides) {
	return sides.some(side => side === 0);
}

function badSides(sides) {
	let sort = sides.toSorted((a, b) => b - a);
	let [max, small1, small2] = sort;

	return small1 + small2 < max;
}

function isInvalid(sides) {
	return sideIsZero(sides) || badSides(sides);
}

function uniq(sides) {
	let uniqueSides = [];

	sides.forEach(side => {
		if (!uniqueSides.includes(side)) {
			uniqueSides.push(side);
		}
	})

	return uniqueSides;
}

function isEquilateral(uniqueSides) {
	return uniqueSides.length === 1;
}

function isIsosceles(uniqueSides) {
	return uniqueSides.length === 2;
}

function triangle(...sides) {
	if (isInvalid(sides)) return 'invalid';

	let uniqueSides = uniq(sides);

	if (isEquilateral(uniqueSides)) {
		return 'equilateral';
	}
	else if (isIsosceles(uniqueSides)) {
		return 'isosceles';
	} else {
		return 'scalene';
	}
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
