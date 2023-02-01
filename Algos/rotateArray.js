let x = [1, 2, 3, 4, 5, 6];
let y = [x.length - 1];
x.splice(0, -1, x[y]); //create a new index and add last index in start of array
x.pop(); // remove last index from start of array
console.log(x); // [6,1,2,3,4,5]
