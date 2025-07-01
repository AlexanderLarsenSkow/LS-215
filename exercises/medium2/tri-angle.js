/*
input: 3 angles
output: string

Rules:
	- Right Triangle: one angle is 90
	- acute: all angles less than 90
	- obtuse: one angle is greater than 90.

	Valid Triangle:
		- sum of angles must be exactly 180.
		- Every angle must be greater than 0.

	Return Values:
		- if acute, 'acute'
		- if right, 'right
		- if obtuse, 'obtuse'
		- if invalid, 'invalid'

Questions:

Examples:
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
// 

Data Structures:
	-Array
	some for 0, which is invalid
	reduce to check if the sum is 180 or not.

Algo:
	1. Check if invalid first.
		a. IsInvalid HELPER:
			- Either an angle is 0 HELPER with some
			- OR the sum is NOT 180. HELPER
	2. If valid check if any side is 90 in helper. return 'right'
	3. Check if all sides are less than 90 next, return 'acute'
	4. If neither of those, return 'obtuse'
*/

const TRIANGLE_TOTAL = 180;
const RIGHT_ANGLE = 90;

function zeroAngle(angles) {
	return angles.some(angle => angle === 0);
}

function not180(angles) {
	const totalAngles = angles.reduce((total, angle) => total + angle);
	return totalAngles !== TRIANGLE_TOTAL;
}

function isInvalid(angles) {
	return zeroAngle(angles) || not180(angles);
}

function isRight(angles) {
	return angles.some(angle => angle === RIGHT_ANGLE);
}

function isAcute(angles) {
	return angles.every(angle => angle < RIGHT_ANGLE);
}

function triangle(...angles) {
	if (isInvalid(angles)) return 'invalid';

	if (isRight(angles)) {
		return 'right';
	}
	else if (isAcute(angles)) {
		return 'acute';
	} else {
		return 'obtuse';
	}
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
