function positiveSum(arr) {
  arr.forEach(function (num, i) {
    if (num[i] + num[i] == 0) {
      arr.splice(i, 1);
    } else if (num[i] == ' ') {
      arr.splice(i, 1);
    }
  });
}

// test cases
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
