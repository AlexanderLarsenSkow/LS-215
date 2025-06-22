let regex = /[^a-z \n\r]/ig

console.log('0x1234abcd'.match(regex));
console.log('1,000,000,000s and 1,000,000,000s.'.match(regex));
console.log('THE quick BROWN fox JUMPS over THE lazy DOG!'.match(regex));
