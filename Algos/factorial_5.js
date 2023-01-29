function factorial(n) {
  let output = 1;

  for (let i = n; i >= 1; i--) {
    output *= i;
  }
  return output;
}

console.log(factorial(5)); //1
