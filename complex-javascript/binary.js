const sortByBinaryOnes = (numbers = []) => {
  const calculateOne = (str = '') => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      const x = str[i];
      if (x === '1') {
        res++;
      }
    }
    return res;
  };

  const sorter = (a, b) => {
    const firstCount = calculateOne((a >>> 0).toString(2));
    const secondCount = calculateOne((b >>> 0).toString(2));

    if (secondCount === firstCount) {
      // If counts are equal, sort based on the numbers themselves
      return a - b;
    }

    return secondCount - firstCount;
  };
  return numbers.sort(sorter);
};

console.log(sortByBinaryOnes([1, 3]));
console.log(sortByBinaryOnes([1, 2, 3, 4]));
console.log(sortByBinaryOnes([1, 15, 7, 3, 5]));
console.log(
  sortByBinaryOnes([
    5631, 5022, 7047, 7470, 926, 3985, 5858, 6542, 6776, 6868, 6881, 9842, 945,
    5180, 5708, 9184, 4712, 8481, 134,
  ])
);
