/*
1000 Lights
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

input: number 
output: array of lights that are on.

Rules:
  - first pass: every light is toggled
  - second pass: multiples of 2
  - third pass: multiples of 3

  - On each pass, the lights are toggled on / off
  - lights are included in the final array if they are ON.
  - With each iteration through this structure, going up a multiple. 
  - First iteration: everything is a multiple of 1, so everything starts on.
  - Start directly at the second iteration, and toggle everything that is a multiple of the current value.

Questions:
  - what should be returned when there is no input?
  - Can any other type of input be passed in?
  - NaN, Infinity? -Infinity?
  - -numbers? Math.abs
  - floats? 3.5 round it down 

Examples:

console.log(lightsOn(3)); // [1]
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(6)); // [1, 4]

console.log(lightsOn(100)); //
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  
1 2 3 4 5 6

2
on => 1 3 5
off => 2 4 6

3
on => 1 5 6
off => 2 3 4


4 
on => 1 4 5 6
off => 2 3

5
on => 1 4 6
off => 2 3 5

6
on => 1 4
off => 2 3 5 6
  

  4 => []



Copy Code

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  - toggle off 2 and 4

// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  - toggle off 3
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  - toglge 4 back on, 1, 4, 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  - toggle 5 off, leaving 1 and 4

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Data Structures:
  on array and off array. 

  {1: on, 2: on, 3: on.... etc}

  for loop, going from 1 up to the input number.
    adding the current number as the key and each one references the string on.

  MAIN function:
    - switching the on / off switch at every point.
    - iterate from 2 up to the input number.

    if the number is a multiple of the current number and is 'on', flip it off.
    if the number is a multiple of the curret number and is off, flip it on.

  {1: on, 2: off, 3: on} => flip it to on or off based on if it's a multiple of the current number.

Algo:
  1. Build an object with all the numbers as String keys, whose values are 'on'.
    buildObject HELPER, 1 arg input number, => object
    a. iterate from 1 to the input number, adding each number as a key in an array referencing the string 'on'
    b. return the object.
  2. Iterate from 2 up to the input number n
  3. Iterate through the keys of numbers and coerce the string to a number.
  4. If the key coerced to a number is a multiple of the current number, call this helper.
  5. HELPER, 2 arguments, key and object itself, mutates object.
    a. if the value at that key is 'on', make it 'off'
    b. if the value at that key is 'off', make it 'on'
  6. Return the keys mapped to a number as well and filtered by their 'on' value.
*/

function initializeLights(lastNumber) {
  let lights = {};

  for (let count = 1; count <= lastNumber; count += 1) {
    lights[count] = 'on';
  }

  return lights;
}

function toggleLight(key, lights) {
	lights[key] === 'on' ? lights[key] = 'off' : lights[key] = 'on';
}

function lightsOn(lastNumber) {
  let lights = initializeLights(lastNumber);
  let keys = Object.keys(lights);

  for (let count = 2; count <= lastNumber; count += 1) {
    keys.forEach(key => {
      if (Number(key) % count === 0) {
        toggleLight(key, lights);
      }
    })
  }

  return keys.filter(key => lights[key] === 'on')
              .map(Number);
}

console.log(lightsOn(3)); // [1]
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(6)); // [1, 4]

console.log(lightsOn(100)); //
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]