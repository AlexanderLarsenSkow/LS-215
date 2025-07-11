/*
/*

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

input: 2 arguments: string of characters and a shift value (number)
output: encrypted string, encrypted based on the cipher.

Rules:
  - Shifting letters in the alphabet by a number, A => D , 3
  - Shift value is the number to shift by.
  - Only encrypts letters, upper and lower.
  - Every other character is left as is.
  - Substituted letters are always teh same case as their original.
    - A => D, a => d
  - If key value is greater than length of alphabet, wraps to beginning.

questions:
  - What happens if we receive less arguments? 
    - no shift provided?
    - no arguments at all?
    - NaN, Infinity?
    - Negative?
  - Empty string input?
  - Extra characters are kept in place.
  - null? 

Examples:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"
caesarEncrypt('N', 4);       // "R"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"
caesarEncrypt('n', 4);       // "r"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

caesarEncrypt('Alex', 2);       // "Cngz"
caesarEncrypt('Alex', 3);       // "Doha"
caesarEncrypt('*Alex_', 3);       // "*Doha"_

// Edge Cases:
caesarEncrypt('', 3);       // null
caesarEncrypt('Alex');       // null
caesarEncrypt();       // null

Data Structures:
  - string working with:
    - split into an array

  - replace with a callback function
  abcdefghijklmnopqrstuvwxyz

  replace based on lowercase / uppercase letters, /[a-z]/gi
  if it matches a lowercase value, we find the index of that value and add the shift value to it.

  if it matches an uppercase value, we downcase it, find the index of that value, shift it, and return the uppercase character at that index.

  shifting over the edge.
    - If the value at the index is ever undefined, we need to put it to 0.

    - increment, reset to 0, and continue incrementing.
    - Remainder.

    - t 20 (shift 10) => 'd'
    shift value of 10
    remainder 6
    10 - 6 is the number to hit in the next section.
    u v w x y z

    z + 3 => c
  0 + 3
    

  Algo:
    - If the string is falsey OR the shiftValue is undefined, return null.
    1. declare a constant of lowerCase letters 
      - abcdefghijklmnopqrstuvwxyz
    2. declare a regex constant that matches all letters, upper orl ower
    3. Replace all these characters with a callback function in the replace method.
    4. Cipher Callback HELPER: letter, shiftValue, => new Letter
      - if it matches lowercase, increment the value by the shift value. and return it.
      - If it matches an uppwercase char, downcase it and increment the index value of it, returning the uppercased new Letter at the end.

    5. increment HELPER, takes letter and shift number.
      a. downcase the letter here.
      b. Declare the index of the letter from the string
      c. iterate from 0 to 1 less than teh shift amount in a for loop.
      d. if the index reaches 26, set the index to 0 and continue incrementing.
      e. Return the letter at that new index.

    6. In the main function, return the replacement.

*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function incrementLetter(letter, shiftValue) {
  letter = letter.toLowerCase();
  let index = LETTERS.indexOf(letter);

  for (let count = 0; count < shiftValue; count += 1) {
    index += 1;
    if (index === 26) {
      index = 0;
    }
  }

  return LETTERS[index];
}

function caesarEncrypt(string, shiftValue) {
  if (!string || shiftValue === undefined) return null;
  const letterRegex = /[a-z]/gi;

  return string.replace(letterRegex, letter => {
    let newLetter = incrementLetter(letter, shiftValue);

    if (letter.match(/[a-z]/)) {
      return newLetter;
    } else {
      return newLetter.toUpperCase();
    }
  });
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('N', 4));       // "R"
console.log(caesarEncrypt('Z', 1));       // 'A'

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('n', 4));       // "r"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt('Alex', 2));       // "Cngz"
console.log(caesarEncrypt('Alex', 3));       // "Doha"
console.log(caesarEncrypt('*Alex_', 3));       // "*Doha"_

// // Edge Cases:
console.log(caesarEncrypt('', 3));       // null
console.log(caesarEncrypt('Alex'));       // null
console.log(caesarEncrypt());       // null
console.log(caesarEncrypt('a', 0));       // 'a'