let regex = /^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)$/g;

console.log('A grey cat'.match(regex)); // 'A grey cat' 1 match
console.log('A blue caterpillar'.match(regex)); // null
console.log('The lazy dog'.match(regex)); // 'The lazy dog', 1 match
console.log('The white cat'.match(regex)); // null
console.log('A loud dog'.match(regex)); // 'a loud dog', 1 match
console.log('--A loud dog'.match(regex)); // null
console.log('Go away dog'.match(regex)); // null
console.log('The ugly rat'.match(regex)); // null
console.log('The lazy, loud dog'.match(regex)); // null
