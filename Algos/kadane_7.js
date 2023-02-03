function kadane(x) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < x.length; i++) {
    let currentNum = x[i];
    currentSum = Math.max(currentSum + currentNum, 0);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
x = [1, 2, -3, 4, 5];
console.log(kadane(x));
