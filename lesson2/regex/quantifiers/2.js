let regex = /\?$/g;

console.log('What\'s up, doc?'.match(regex)); // '?'
console.log('Say what? No way.'.match(regex)); // null, not mached because not at end
console.log('?'.match(regex)); // '?'
console.log('Who? What? Where? When? How?'.match(regex)); // '?'
