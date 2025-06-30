/*
input: object with opponent positions (1st arg) and integer repping current position (2nd arg)
output: integer representing position of closest active opponent.

Rules:
	- Given an object of opponents with positions,
	- Return the position of the closest active opponent.
	- This will be closest to the input number, which is the player position.
	- If the positions are equidistant, return the position of the highest position on board.
		- Player Pos: 3, Opp1: 1, Opp2: 5. 5 and 3 are equidistant to 1, but 5 is greater.
	- If no opponents, empty object, return null.
	- If all opponents (1 or more) have null positions, return null.
	- if no player position, return null.

Questions:
	- Will I ever get an empty object with no opponents? What do I return in this case?
	- Will I ever not receive a position for my player? What do I return here?
	- Will positions always be numbers? What do I do if they are not?
	- Will opponents ever have the exact same position? What do you do then?
	- Will special numbers, like NaN, or the Infinity's ever come into play? What do you do then?
	- What if fewer arguments are provided? What do you do then?
	- What should I return if there are only opponents with null?

Assumptions:
	- null will be present in a number of objects
	- Numbers and null can be present.
	- 

Examples:

function findClosestOpponent(positions, position) {
  // ...
}

// Generic Cases:

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1" : 100,
  "Opponent 2" : 200,
  "Opponent 3" : 300
}, 220)); // 200

// Equidistant
console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1" : 100,
  "Opponent 2" : 200,
  "Opponent 3" : 300,
}, 250)); // 300


// Includes null value

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

// Edge Cases:

console.log(findClosestOpponent({
  "Opponent 1a" : null,
  "Opponent 1b" : null
}, 3)); // null

console.log(findClosestOpponent({
}, 3)); // null

console.log(findClosestOpponent({
  "Opponent 1a" : null,
  "Opponent 1b" : null
})); // null


Data Structures:
	we don't care about opponent names, only positions.
	So takes values:
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null

	=> [1, 5, 50, 100, null] => call filter, returning only truthy elements.

	[null, null] => [], if array is empty here, then return null.

	Math.abs for finding distance. [1, 4, 50, 100] , player Pos => 150 150 - 1, 150 -4, 150 -50, 150 - 100
	. Min wins.

	Take the min of this new array, then find the last value in a sorted array of values that
		- equal this min when minused from the player position.

Algo:
	1. If no argument provided for opponents or player position, return null.
	2. Take the values of the opponents object.
	3. Filter by truthy values. 
	4. GUARD CLAUSE: if values is an empty array, return null.
	5. HELPER: playerPosition - current number is distance.
	6. map by distance and take the minimum value from this array. This is the minDistance.
	7. From here, sort the positions (values from opponents) in ascending order
		and find the Last one that, when passed into the helper, returns the minDistance.
	8. Return that value.
*/

const distance = (playerPos, currentPos) => Math.abs(playerPos - currentPos);

function findClosestOpponent(opponents, playerPos) {
	if (opponents === undefined || playerPos === undefined) return null;

	let positions = Object.values(opponents).filter(Boolean);
	if (positions.length === 0) return null;

	const distances = positions.map(pos => distance(playerPos, pos));
	const minDistance = Math.min(...distances);

	return positions.toSorted().findLast(pos => {
		return distance(playerPos, pos) === minDistance;
	})
}

// Generic Cases:

console.log(findClosestOpponent({
  "Opponent 1" : 1,
}, 10)); // 1

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1" : 100,
  "Opponent 2" : 200,
  "Opponent 3" : 300
}, 220)); // 200

// Equidistant
console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1" : 200,
  "Opponent 2" : 100,
  "Opponent 3" : 300,
}, 250)); // 300


// Includes null value

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

// Edge Cases:

console.log(findClosestOpponent({
  "Opponent 1a" : null,
  "Opponent 1b" : null
}, 3)); // null

console.log(findClosestOpponent({}, 3)); // null

console.log(findClosestOpponent({
  "Opponent 1a" : null,
  "Opponent 1b" : null
})); // null