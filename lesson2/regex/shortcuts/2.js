let regex = /\s...\s/g;

console.log('Doc in a big red box.'.match(regex)); // only big
console.log('Hup! 2 3 4'.match(regex)); // ' 2 3 '
