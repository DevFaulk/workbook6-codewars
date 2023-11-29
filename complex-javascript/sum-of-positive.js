function positiveSum(arr) {
  let sum = 0;
  arr.forEach(function (num, i) {
    if (num + num == 0) {
      arr.splice(i, 1);
    } else if (num == ' ') {
      arr.splice(i, 1);
    } else return (sum += num);
  });
  return sum;
}

// test cases
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
