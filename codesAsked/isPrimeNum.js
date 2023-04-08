function isPrimeNum(n) {
  if (n < 1) {
    return `Please enter number greater than 1`;
  }
  if (n == 1) {
    return `The number ${n} is neither prime nor composite`;
  }
  let flag = 1;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    return `The number ${n} is a prime Number`;
  } else {
    return `The number ${n} is a Not prime Number`;
  }
}
let num = 2;
console.log(isPrimeNum(num));
