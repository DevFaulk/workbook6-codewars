// return masked string
function maskify(cc) {
  last4Digits = cc.slice(-4);
  const maskedNumber = last4Digits.padStart(cc.length, '#');
  return maskedNumber;
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
