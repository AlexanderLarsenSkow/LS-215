let language = 'JavaScript';
let idx = language.indexOf('S');

console.log(idx); // 4

let charCode = language.charCodeAt(idx); //
console.log(charCode); // 83

console.log(String.fromCharCode(charCode)); // 'S'

let lastIdx = language.lastIndexOf('a'); 
console.log(lastIdx); // 3

let a = 'a';
let b = 'b';

console.log(a > b); // false
console.log(a > 'B'); // true

console.log(language.slice(1, 4)); // ava
console.log(language.slice(2, 4)); // va

console.log(language.substring(1, 4)) // ava
console.log(language.substring(2, 4)) // va

console.log(language.slice(1, -1)); // avaScrip
console.log(language.slice(2, -1)); // vaScrip

// -1 with substring means you only take the entire substring up to that start index.
// negative indices become 0 and it switch them since the bigger value is the ending.
console.log(language.substring(1, -1)) // J
console.log(language.substring(2, -1)) // Ja
