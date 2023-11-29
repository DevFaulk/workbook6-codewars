function findAverage(array) {
  let sum = 0;

  if (array.length == 0) {
    return 0;
  }

  array.forEach(function (value) {
    sum += value;
  });
  return sum / array.length;
}

console.log(findAverage([1, 2, 3, 4]));
