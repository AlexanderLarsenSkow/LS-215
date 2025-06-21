// Use Object.keys or Object.values with forEach to iterate over these values.
// Unfortunately, objects just doesn't have many methods in JS.

let myObj = {a: 1, b: 2, c: 3};

Object.keys(myObj).forEach(key => console.log(key, myObj[key]));
// 'a' 1
// 'b' 2
// 'c' 3

// More complicated iteration with both values and keys will require Object.entries()
/*
Object.entries() returns an array of subarrays, where each key / value pair is a subarray.
You can use Object.fromEntries() to convert back to an object.
*/
// map to a new object with values doubled from myObject

function doubleObjectValues(object) {
  let objEntries = Object.entries(object);
  let objMapped = objEntries.map(([key, val]) => [key, val * 2]);

  return Object.fromEntries(objMapped);
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 })); // { a: 2, b: 4, c: 6 }