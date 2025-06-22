// Write a regex that matches blueberry and blackberry, but write berry once

console.log('blueberry'.match(/(blue|black)berry/g)); // ['blueberry']
console.log('blackberry'.match(/(blue|black)berry/g)); // ['blackberry']
console.log('black berry'.match(/(blue|black)berry/g)); // null, there is a space
console.log('strawberry'.match(/(blue|black)berry/g)); // null
