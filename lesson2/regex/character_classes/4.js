let regex = /[^x]/gi; // This is problematic because it matches ALL characters, even spaces.

console.log('0x1234'.match(regex));
console.log('Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.'.match(regex));
console.log('The quick brown fox jumps over the lazy dog'.match(regex));
console.log('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'.match(regex));

let betterRegex = /[a-wyz]/ig

console.log('0x1234'.match(betterRegex)); // null, no matches
console.log('Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.'.match(betterRegex));
console.log('The quick brown fox jumps over the lazy dog'.match(betterRegex));
console.log('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'.match(betterRegex));
