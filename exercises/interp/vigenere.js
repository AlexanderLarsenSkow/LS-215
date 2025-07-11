/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

input: string of characters
output: encoded string based on the cipher

Rules:
  - using caesar cipher to encode alphabetic characters
  - keyword involved... each letter of the keyword is treated as a shift value.
  - 'B' => 1, 'd' => 3
  - Shift value is equal to index in alphabet
  - a-z => 0 - 25, uppercase is the same.
  - only alphabetic chars replaced, other kept the same.
  - Split the string into substrings based on the length of the keyword.
    -keyword is 4? then substrings of 4.
  - Keep the case the same. 'A' => uppercase something, lowercase, same thing.
  - return '' if the string is empty
  - return the string if the keyword is falsey
  - All non-alphabetic characters are filtered out of the conversion with the keyword.

Questions:
  - what is polyalphabetic sub?
  - It says we only shift alphabetic characters. We must leave other characters in place?
  - Do they always match up perfectly?
  - What do we do with an empty string?
  - What should we return if the key word isn't input?

Examples:

plaintext: Pineapples don't go on pizzas!
keyword: meat
  how is this applied? 
  keyword is length of 4? and we split the string into lengths of 4?

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas 
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

Examples:

plaintext: Pineapples don't go on pizzas!
keyword: meat

console.log(vigenere('Pineapples don't go on pizzas!', 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenere('Pineapples don't go on pizzas!', 'a')); // 'Pineapples don't go on pizzas!'

console.log(vigenere('I have a dog.', 'b')); // J ibwf eph.

console.log(vigenere('doggon', 'abc')); // 'api gpp'

// dog gon => api gpp
// abc abc 

// Edge Cases

console.log(vigenere('Pineapple', '')); // 'Pineapple'
console.log(vigenere('Pineapple')); // 'Pineapple'
console.log(vigenere('')); // ''

Data Structures:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

['Pine', 'appl', 'esdo', 'ntgo', 'onpi', 'zzas']

Bmnx mtpe qwdh zxgh arpb ldal
add those special characters back...

filter out non-alphabetic characters.
meat => length of 4. Apply the cipher shift value based on that keyword's place in the alphabet.

meat => letter go across and apply it to the current letter

new helper function, find the number value of the letter in the alphabet constant.

abcdefghijklmnopqrstuvwxyz
index values for each letter, and find a number value.

Using remainder to shift the values.
keyword = abc => 3
substring = "ap'd*_c"
apdc
specialChars = '*_
apdc => shift that
shift += '*_ 

shift'*_


Algo:
  High Level:
    1. Build a constant of letters that are lowercase
    2. Replace all alphabetic characters, uppercase or lower, in the string
    3. Inside this replacement, build an array of substrings that are each teh length of the keyword.
    4. for each letter, in a new helper, translate the letter across to its encoded version.
    5. If the original letter is uppercase, return uppercase, else lowercase.
    6. return teh replacement.

  taking the length of the keyword in the main function
    essentially a slice from 0 the length of the keyword. Add the length, then 

    P => Pine meat have a count and the count increments each time. When the count is equal to the length, it resets.

    index to 0, reset that to 0 every time we hit 4. Call caesar helper to shift by that letter.

  Detailed:
    getSubStrings, only alphabetic characters
    1. Get a constant that is the length of the keyword.
    2. Create a result array and an empty string
    3. Then iterate from the beginning of the string ot the end
    4. add the current char to the substring if it'
    5. If the substring is the length of the keyword, set the string to an empty string, add it to the array
    6. return teh array.

    Shift => 
      HELPER, take the keyword and the current substring,
      1. take each substring, and map it across its correspondant character in the keyword.
        abcd => meat
      2. Iterate from 0 to the length of the current substring, then call a helper to shift it by that number of values.

    HELPER => casear, takes original letter and new letter
      1. finding the index of the downcased letter in the constant
      2. Take the index of the letter, add it to 26, and take the remainder of that with 26.
      3. Add the shift over to the original Index, then take that value for the last index.
      4. Return the value at this index. if the original letter is uppercase, return the letter uppercased.
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const alphRegex = /[a-z]/gi;
const ALPHA_NUM = 26;

function caesar(letter, keyLetter) {
  let workingLet = letter.toLowerCase();
  let ogIndex = LETTERS.indexOf(workingLet);
  let keyIndex = LETTERS.indexOf(keyLetter);

  let shift = (keyIndex + ALPHA_NUM) % ALPHA_NUM;
  let result = ogIndex + shift;

  let finalIndex = result > ALPHA_NUM ? result % ALPHA_NUM : result;
  let newLetter = LETTERS[finalIndex];

  return letter.match(/[A-Z]/) ? newLetter.toUpperCase() : newLetter;
}

function vigenere(string, keyword) {
  if (!keyword) return string;
  if (!string) return '';

  const keyLength = keyword.length;
  let index = -1;
  
  return string.replace(alphRegex, letter => {
    index += 1;

    if (index === keyLength) index = 0;
    return caesar(letter, keyword[index]);
  })
}

console.log(vigenere("Pineapples don't go on pizzas!", 'meat'));

// Pineapples dont go on pizzas
  
  // Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenere("Pineapples don't go on pizzas!", 'a')); 
  
  // 'Pineapples don't go on pizzas!"

console.log(vigenere('I have a dog.', 'b')); // J ibwf b eph.

console.log(vigenere('doggon', 'abc')); // 'dpigpp'

// dog gon => api gpp
// abc abc 

// Edge Cases

console.log(vigenere('Pineapple', '')); // 'Pineapple'
console.log(vigenere('Pineapple')); // 'Pineapple'
console.log(vigenere('')); // ''
console.log(vigenere('dog', 'abcd')); // 'dpi'