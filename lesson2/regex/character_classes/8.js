let insensCase = /[abc]/i;
let charClass = /[Aa][Bb][Cc]/;

// Yes, these are equivalent. Can match any sequence of abc with any case.

console.log(insensCase.test('Abc')); // true
console.log(charClass.test('Abc')); // true