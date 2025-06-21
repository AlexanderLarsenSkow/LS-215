/*
	input: array of arrays, where every subarray has two numbers
	output: a total of all areas.

	Rules:
		What is area? length * width
*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const getArea = (length, width) => length * width;

function totalArea(rectangles) {
	let areas = rectangles.map(function(rectangle) {
		return getArea(rectangle[0], rectangle[1]);
	})

	return areas.reduce((totalArea, length) => totalArea + length);
}

console.log(totalArea(rectangles));    // 141

function totalSquareArea(squarishShapes) {
	let squares = squarishShapes.filter(shape => shape[0] === shape[1]);
	return totalArea(squares);
}

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles2));    // 121