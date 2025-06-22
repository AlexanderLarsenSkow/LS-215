// Write a regex that matches a comma or space

console.log('This line has spaces'.match(/(,| )/g)); // [' ', ' ', ' ']
console.log('This,line,has,commas,'.match(/(,| )/g)); // [',', ',', ',', ','] 4 commas
console.log('No-spaces-or-commas'.match(/(,| )/g)); // null, neither spaces or commas
