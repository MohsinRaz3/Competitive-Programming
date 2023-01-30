let arr = [-3, 5, -2, 4, 55, 22, -23, -14];

let neg = [];
let pos = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    neg.push(arr[i]);
  } else {
    pos.push(arr[i]);
  }
}
let res = neg.concat(pos);
console.log(res);
