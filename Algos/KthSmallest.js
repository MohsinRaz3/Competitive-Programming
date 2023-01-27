let sortArray = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  //code here
  let pivotValue = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return (kth = [...sortArray(left), pivotValue, ...sortArray(right)]);
};

let arr = [3, 6, 4, 8, 9, 60];
let kthNum = 4;
sortArray(arr);
console.log(`The Kth ${kthNum} item is ${kth[kthNum - 1]}`);
