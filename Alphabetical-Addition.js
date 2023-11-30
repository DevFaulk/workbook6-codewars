function addLetters(...letters) {
    console.log(letters.length);
    const lettersArray = 'abcdefghijklmnopqrstuvwxyz';
    
    if(letters.length == 0){
      return 'z'
    }
    
    let sum = 0;
    
    for (let i = 0; i < letters.length; i++) {
        const letterPosition = lettersArray.indexOf(letters[i]) + 1;
        if (letterPosition > 0) {
          sum += letterPosition;
      }
    }
  
    while (sum > 26) {
      sum -= 26;
    }
  
    return lettersArray[sum - 1];
  }