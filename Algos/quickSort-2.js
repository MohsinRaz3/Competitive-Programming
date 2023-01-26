// Find minimum and maximum number in the array
let quickSort = (arr) => {
  if (arr.length < 2) {
    //Loop stops when index itration (i) length reaches 2
    return arr;
  }
  let pivotIndex = arr[arr.length - 1]; // last index value
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotIndex) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return (ans = [...quickSort(left), pivotIndex, ...quickSort(right)]);
};

const arr = [61, 51, 14, 22, 2, 12];
quickSort(arr);
console.log(
  `Minimum number: ${ans[0]} & Maximum number: ${ans[ans.length - 1]}`
);
