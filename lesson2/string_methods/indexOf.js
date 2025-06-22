let language = 'JavaScript';

console.log(language.indexOf('S')); // 4
console.log(language.indexOf('J')); // 0
console.log(language.indexOf('s')); // -1, doesn't exist in this string
console.log(language.indexOf('ipt')); // 7, takes index of first char in substring

// lastIndexOf

let state = 'Mississippi';

console.log(state.lastIndexOf('i')); // 10
console.log(state.lastIndexOf('s')); // 6
console.log(state.lastIndexOf('sp')); // -1, no sp substrings 