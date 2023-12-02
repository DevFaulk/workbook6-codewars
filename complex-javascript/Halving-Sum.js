function halvingSum(n) {
  let divider = 1;
  let sum = 0;
  while (Math.floor(n / divider >= 1)) {
    sum += Math.floor(n / divider);
    divider *= 2;
  }

  return sum;
}

console.log(halvingSum(25));
console.log(halvingSum(127));
