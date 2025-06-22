let regex = /[a-j0-9]/ig;

console.log('0xDEADBEEF'.match(regex));
console.log('1234.5678'.match(regex));
console.log('Jamaica'.match(regex));
console.log('plow ahead'.match(regex));
