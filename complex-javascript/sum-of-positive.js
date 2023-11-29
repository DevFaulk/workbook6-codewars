function positiveSum(arr) {
  let sum = 0;
  let sumArray = [];
  arr.forEach(function (num, i) {
    if (num + num == 0 || num + num < num || num == ' ' || num == 0) {
      return;
    }
    sumArray.push(num)
  });

  sumArray.forEach(function(num){
    sum += num
  })
  return sum;
}

// test cases
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
