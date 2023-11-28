function solution(str) {
  let splitArray = [];
  let stringLastLetter = str.slice(-1);
  // stringLastLetter is the last letter in the loop

  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      splitArray.push(str.slice(i - 1, i + 1));
    }
    if (str[i] == stringLastLetter && i % 2 == 0) {
      splitArray.push(str.slice(i, i + 1) + '_');
    }
  }
  return splitArray;
}

let str = 'BPSjbAmqhttlpiUaBggNrulh';

console.log(solution(str));

// let x = "abcdef"

// for(let i = 0; i < x.length; i++){
//     console.log(i)
// }
