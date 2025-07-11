/*
Car Park Exit
You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:

Free carparking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.

... and returns an array of the quickest route out of the carpark.

input: 2-D array, filled iwth nums?
output: returns an array of strings that are directions and numbers 

Rules: 
  - exit the carpark
  - exit is always the bottom right of the car park
  - free spaces are 0
  - staircases are 1
  - start position is represneted by a 2 and can be any level
  - exit is always bottom right of ground floor
  - must use staircases, repped by 1, to go down a level.
  - every floor has one staircase apart from ground floor (no stair cases)
  - We want to find an array with directions and number based on the distance from the exit to the next step...
  - First, start at 2, find the staircase, go down, find the exit (which is always the end of the last array.)
  - The last array is the groundfloor.
  - R4 => go right 4, D2 => down 2, L7 go left 7
  - Empty array? RETURN []; or if nested empty array

Questions:
  - how will this be represented? 
  - how is the ground floor represented?
  - empty array question

Examples:


console.log(
  JSON.stringify(parkingExit([
  [1, 0, 0, 0, 2], 
  [0, 0, 0, 0, 0] exit 1 is staircase
  ]
  )) === JSON.stringify(["L4", "D1", "R4"])
);
// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

console.log(
  JSON.stringify(parkingExit([
  [2, 0, 0, 1, 0], 
  [0, 0, 0, 1, 0], // 2 's in same index position, go down 2
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["R3", "D2", "R1"])
);
// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"

console.log(
  JSON.stringify(parkingExit([
  [0, 2, 0, 0, 1], 
  [0, 0, 0, 0, 1], 
  [0, 0, 0, 0, 1], 
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["R3", "D3"])
);

console.log(
  JSON.stringify(parkingExit([
  [1, 0, 0, 0, 2], 
  [0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["L4", "D1", "R4", "D1", "L4", "D1", "R4"])
);

console.log(
  JSON.stringify(parkingExit([[0, 0, 0, 0, 2]])) === JSON.stringify([])
);

// You are already at right bottom corner.

console.log(parkingExit([[2, 0, 0, 0, 0]])); // ['R4']
console.log(parkingExit([])); // []
console.log(parkingExit([[]])); // []


Data Structures

console.log(
  JSON.stringify(parkingExit([
  [1, 0, 0, 0, 2], 
  [0, 0, 0, 0, 0] // exit 1 is staircase
  ]
  )) === JSON.stringify(["L4", "D1", "R4"])
);

// 0 4
// finding the stair => looking for the 1 in teh same, second index.

console.log(
  JSON.stringify(parkingExit([
  [0, 2, 0, 0, 1], 
  [0, 0, 0, 0, 0] // exit 1 is staircase
  ]
  )) === JSON.stringify(["R3", "D1"])
); 

console.log(
  JSON.stringify(parkingExit([[0, 0, 0, 0, 2]])) === JSON.stringify([])
);

guard clauses:
  - is there a 1? If no 1, we're on ground floor, find the exit.
  - length - 1.
  - if indexOf 2 is equal to the element at the last index, then return empty array outright.

  - from the beginning, find the 1. 
    find the distance from 2 to the 1.
      
    
    if the index of 2 is greater, then we're moving Left
      2 index - stairIndex === L4
    if the index of 2 is lesser, then we're moving right.
      Math.abs()

    going down: looking for a 1 in another subarray.
      Math.abs(startIndex - the endIndex)

    floorIndex => subarray
    spotIndex => parking spot / 0's
    stairIndex => 1
    startIndex => 2
    groundIndex => end of the last array.
      const array.length - 1, array.length - 1

[0, 4]

Algo:
  GUARD: if teh array is empty or only has an empty array, return an empty
  
  HIGH LEVEL
  1. Look for the start (2) and get the coordinates.
  2. if a 1 is present on the floor, find the 1.
  3. Add L or R with number to the result array
  4. If a 1 is NOT present, find the exit.
  5. If the spotIndex is equal to the end of the array, return the result array
  6. if not, find the exit and add the result to the return array.

  DETAILED
  MAIN
    directions array empty array
    HELPER
  1. Look for the starting point.
    a. find the Index of the array that includes 2...
    b. Find the index of 2 inside that array
    c. Add both values to a coordinates array. return it

  2. if a 1 is present inside the floorIndex array
      a. find the Index of 1
      b. If the spotIndex [1] coordinates equal to the index of 1, then we skip this part.
      c. Subtract the stairIndex from the startIndex, absolute it. This is the coordinate.
      d. If the startIndex is greater, then add L plus the math result as a string to the driections array
        , else add R plus the math result.

      e. addHoroztonal, this takes the directions, it should also take a distance, coordinates the nextSpot index.
      
        1a. If the coordinate at idx 1 is greater than the nextSpot, then the direction is L.
        1b. If the coordiante at 1 is less than the nextSpot, then the direction is R.
        1c. Add the distance to the direction.
        1d. Add the full direction to the directions array and return that.

  3. After finding the 1, check the floor index... 0
    a. increment the floorIdx by 1.
    b. If the value is 1, we keep going down. If not, we stay
    c. Minus the final index from the original start (absolute it), then add D plus the math result.
  
  4. 
    a. If 1 is not present, check if spotIndex is equal to the last index. If so, return the result and break out
    b .If 1 is not present and we are not equal to that, find the difference between the endIndex and the startIndex here, and add R plus that result to the array.
    c. Return the directions.
  
  passing around and returning coordinates...
*/

const START = 2;
const STAIR = 1;
const RIGHT = 'R';
const LEFT = 'L';
const DOWN = 'D';

function emptyArr(garage) {
  return garage.length === 0 || (garage.length === 1 && garage[0].length === 0);
}

function findStart(garage) {
  let floorIndex = garage.findIndex(floor => floor.includes(START));

  let spotIndex = garage[floorIndex].indexOf(START);

  return [floorIndex, spotIndex];
}

function addHorozontal(directions, distance, startPos, stairIndex) {
  
  let direction = '';
  let spot = startPos[1];

  if (spot > stairIndex) {
    direction += LEFT;
  } else {
    direction += RIGHT;
  }

  direction += String(distance);
  directions.push(direction);
}

function addVertical(directions, distance, startPos, stairIndex) {
  let direction = DOWN + String(distance);
  directions.push(direction);
}

function goDown(startPos, directions, garage) {
  let floorIndex = startPos[0];
  let spotIndex = startPos[1];

  while (garage[floorIndex][spotIndex] === STAIR) {
    floorIndex += 1;
  }

  let distance = Math.abs(startPos[0] - floorIndex);
  addVertical(directions, distance, startPos, floorIndex);

  startPos[0] = floorIndex;
}

function goLeftOrRight(startPos, directions, garage) {
  let stairIndex = garage[startPos[0]].indexOf(STAIR);
  
  if (startPos[1] !== stairIndex) {
    let distance = Math.abs(startPos[1] - stairIndex);
    addHorozontal(directions, distance, startPos, stairIndex);
    startPos[1] = stairIndex;
  }
}

function stairOnFloor(garage, startPos) {
  return garage[startPos[0]].includes(STAIR);
}

function atExit(startPos, groundIndex, exit) {
  return startPos[0] === groundIndex && startPos[1] === exit;
}

function parkingExit(garage) {
  let directions = [];
  if (emptyArr(garage)) return directions;
  let startPos = findStart(garage);

  const groundIndex = garage.length - 1;
  const groundFloor = garage[groundIndex];
  const exit = groundFloor.length - 1;

  while (stairOnFloor(garage, startPos)) {
    goLeftOrRight(startPos, directions, garage);
    goDown(startPos, directions, garage);
  }

  if (atExit(startPos, groundIndex, exit)) {
    return directions;
  } else {
    let distance = Math.abs(startPos[1] - exit);
    addHorozontal(directions, distance, startPos, exit);
    return directions; 
  }  
}

console.log(
  JSON.stringify(parkingExit([
  [1, 0, 0, 0, 2], 
  [0, 0, 0, 0, 0] // exit 1 is staircase
  ]
  )) === JSON.stringify(["L4", "D1", "R4"])
);
// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

console.log(
  JSON.stringify(parkingExit([
  [2, 0, 0, 1, 0], 
  [0, 0, 0, 1, 0], // 2 's in same index position, go down 2
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["R3", "D2", "R1"])
);
// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"

console.log(
  JSON.stringify(parkingExit([
  [0, 2, 0, 0, 1], 
  [0, 0, 0, 0, 1], 
  [0, 0, 0, 0, 1], 
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["R3", "D3"])
);

console.log(
  JSON.stringify(parkingExit([
  [1, 0, 0, 0, 2], 
  [0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0]
  ])) === JSON.stringify(["L4", "D1", "R4", "D1", "L4", "D1", "R4"])
);

console.log(
  JSON.stringify(parkingExit([[0, 0, 0, 0, 2]])) === JSON.stringify([])
);

// You are already at right bottom corner.

console.log(parkingExit([[2, 0, 0, 0, 0]])); // ['R4']
console.log(parkingExit([])); // []
console.log(parkingExit([[]])); // []