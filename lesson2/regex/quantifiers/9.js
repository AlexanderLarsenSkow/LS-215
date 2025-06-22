let regex = /^(,\d+){3,6},$/g

console.log(',123,456,789,123,345,'.match(regex)); // match
console.log(',123,456,,789,123,'.match(regex)); // null
console.log(',23,56,7,'.match(regex)); // match
console.log(',13,45,78,23,45,34,'.match(regex)); // match
console.log(',13,45,78,23,45,34,56,'.match(regex)); // null
