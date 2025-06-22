let pi = 22 / 7;
let conversion = pi.toString();

console.log(conversion.lastIndexOf('14')); // 14

let boxNumber = (356).toString();
console.log(boxNumber); // '356'

boxNumber = parseInt(boxNumber, 10);
console.log(boxNumber); // 356
console.log(typeof boxNumber); // 'number'

boxNumber = String(boxNumber);
console.log(boxNumber); // '356'
console.log(typeof boxNumber); // 'string'