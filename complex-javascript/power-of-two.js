function isPowerOfTwo(n) {
  if (n == 1) {
    return true;
  }
  if (n < 1) {
    return false;
  } 
  else return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(5));
