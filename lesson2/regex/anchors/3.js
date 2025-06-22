let regex = /\b[a-z][a-z][a-z]\b/gi;

console.log('reds and blues'.match(regex)); // and
console.log('The lazy cat sleeps.'.match(regex)); // The cat
console.log('The number 623 is not a word. Or is it?'.match(regex)); // The not
