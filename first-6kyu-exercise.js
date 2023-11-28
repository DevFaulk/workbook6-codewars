function solution(str) {
  let splitArray = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      splitArray.push(str.slice(i - 1, i + 1));
    }
    if (i + 1 == str.length) {
      splitArray.push(str.slice(i, i + 1) + '_');
    }
  }
  return splitArray;
}

let str = 'abcdefg';

console.log(solution(str));

// let x = "abcdef"

// for(let i = 0; i < x.length; i++){
//     console.log(i)
// }
