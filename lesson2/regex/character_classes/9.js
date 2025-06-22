// Challenege

let regex = /\[\^[a0]\-[z9]\]/gi;

console.log('The regex /[^a-z]/i matches any character that is'.match(regex));
console.log('not a letter. Similarly, /[^0-9]/ matches any'.match(regex));
console.log('non-digit while /[^A-Z]/ matches any character'.match(regex));
console.log('that is not an uppercase letter. Beware: /[^+-<]/'.match(regex));
console.log('is at best obscure, and may even be wrong.'.match(regex));
