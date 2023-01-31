// Find Union of two arrays

let a = [1, 2, 3, 4, 5, 6];
let b = [1, 2, 9, 10];

let result = [...new Set([...a, ...b])];
console.log(result); //[1,2,3,4,5,6,9,10]
