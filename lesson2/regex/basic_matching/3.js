// match banana, apple, orange, strawberry

console.log('banana'.match(/(banana|apple|orange|strawberry)/g)); // ['banana']
console.log('orange'.match(/(banana|apple|orange|strawberry)/g)); // ['orange']
console.log('pineapples'.match(/(banana|apple|orange|strawberry)/g)); // ['apple']
console.log('strawberry'.match(/(banana|apple|orange|strawberry)/g)); // ['strawberry']
console.log('raspberry'.match(/(banana|apple|orange|strawberry)/g)); // null
console.log('grappler'.match(/(banana|apple|orange|strawberry)/g)); // ['apple']
 