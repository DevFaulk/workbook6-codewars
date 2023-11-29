const terrain = {
    Y: {
      crest: 1,
      base: 0,
      shallow: -1,
      trench: -2,
    },
    X: 0,
  };
  
  let player = {
    name: 'Gary',
    Y: 0,
    X: 0,
  };
  
  function createDirections(directionArray) {
    let newArray = [];
  
    for (let i = 0; i < directionArray.length; i++) {
      const letter = directionArray[i];
      if (letter == 'U') {
        newArray.push('Up');
      } else if (letter == 'D') {
        newArray.push('Down');
      } else if (letter == 'F') {
        newArray.push('Forward');
      }
    }
  
    countingValleys(newArray);
  }
  
  function countingValleys(directionArray) {
    let count = 0;
  
    for (const step of directionArray) {
      switch (step) {
        case 'Up':
          switch (player.Y) {
            case terrain.Y.shallow:
              player.Y += 1;
              if (player.Y === terrain.Y.base) {
                count += 1; // Increment count when reaching the base after a valley
              }
              break;
            default:
              player.Y += 1;
          }
          break;
        case 'Down':
          player.Y -= 1;
          break;
        case 'Forward':
          player.X += 1;
      }
    }
  
    console.log(`Number of valleys: ${count}`);
  }
  
  createDirections('UFFDDFDUDFUFUDUDUDUDU');