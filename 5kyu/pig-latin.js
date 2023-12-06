const question = '?';
const exclaim = '!';
const period = '.';

function takeFirstLetter(str) {
  let stringSpace = str.split(' ');
  let stringArray = [];
  for (let i = 0; i < stringSpace.length; i++) {
    let lastChar = stringSpace.length - 1;
    let lastCharIsSymbol =
      stringSpace[i] == question ||
      stringSpace[i] == exclaim ||
      stringSpace[i] == period;
    if (i == lastChar && lastCharIsSymbol == false) {
      stringArray += stringSpace[i].substring(1) + stringSpace[i][0] + 'ay';
    }
    if (lastCharIsSymbol == true) {
      stringArray += stringSpace[i];
    }
    if (i !== lastChar && lastCharIsSymbol == false) {
      stringArray += stringSpace[i].substring(1) + stringSpace[i][0] + 'ay ';
    }
    return stringArray;
  }
}

function pigIt(str) {
  return takeFirstLetter(str);
}

console.log(pigIt('O Pig latin is cool !')); /*,'igPay atinlay siay oolcay')*/
console.log(pigIt('This is my string')); /*,'hisTay siay ymay tringsay')*/
