function numCheck(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log (`${number} is greater than 100`);
  } else if (number < 0) {
    console.log (`${number} is less than 0`);
  } else {
    console.log('Enter another number.');
  }
}

numCheck(25);
numCheck(75);
numCheck(125);
numCheck(-25);
numCheck('hello');
