let count = [1, 2, 3, 4, 5];
let doubled = count.map((number, index, array) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// Return value of callback becomes new element in returned array.

