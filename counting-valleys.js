function countingValleys(str) {
  let count = 0;
  let altitude = 0;
  let directionArray = [];

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter == 'U') {
      directionArray.push('Up');
    } else if (letter == 'D') {
      directionArray.push('Down');
    } else if (letter == 'F') {
      directionArray.push('Forward');
    }
  }

  for (const step of directionArray) {
    switch (step) {
      case 'Up':
        if (altitude === -1) {
            count += 1;
          }
        altitude += 1;
        break;
      case 'Down':
        altitude -= 1;
        break;
      case 'Forward':
        break;
    }
  }

  return count;
}

console.log(countingValleys('UFFDDFDUDFUFUDFFFD'));
console.log(countingValleys('UFFDDFDUDFUFUUFFDDFDUDFUFU'));
console.log(
  countingValleys('UFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFU')
);
