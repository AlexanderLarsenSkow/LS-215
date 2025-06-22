let alternate = /(ABC|abc)/
let charClass = /[Aa][Bb][Cc]/;

// These are different, as alternate regex can't match AbC, but the charClass regex can.

console.log(alternate.test('AbC')); // false, only matches ABC or abc
console.log(charClass.test('AbC')) // true, can match aBC, ABC, abc, Abc, aBc, etc. Much more lenient