let regex = /\bcat$/g;

console.log('The lazy cat sleeps'.match(regex)); // null
console.log('The number 623 is not a cat'.match(regex)); // cat
console.log('The Alaskan drives a snowcat'.match(regex)); // null
