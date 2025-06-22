let regex = /^The\b/g;

console.log('The lazy cat sleeps.'.match(regex)); // The
console.log('The number 623 is not a word.'.match(regex)); // The
console.log('Then, we went to the movies.'.match(regex)); // null
console.log('Ah. The bus has arrived.'.match(regex)); // null


// Important to remember that a word like the needs a word boundary in a case like this.