/*
Splits the string into an array based on some character, delimiter, or substr

Empty string: single characters array
can also use a regex to separate into array
*/

let state = 'Mississippi';

console.log(state.split('')); // all chars
console.log(state.split('s')); // ['Mi', '', 'i', '', 'ippi']
console.log('1, 2, 3, 4'.split(',')); // ['1', '2', '3', '4']