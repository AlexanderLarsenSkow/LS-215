let regex = /\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/gi
regex = /\b([a-z]*i){3}[a-z]*\b/gi; // same thing, woof, that's hard

console.log('Mississippi'.match(regex)); // 'Mississippi
console.log('ziti 0minimize7'.match(regex)); // null
console.log('inviting illegal iridium'.match(regex)); // 'inviting' 'iridium
