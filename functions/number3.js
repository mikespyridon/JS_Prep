function multiply(a, b){
  return a * b;
}

function askNum(prompt){
  let rlSync = require('readline-sync');
  let num = parseFloat(rlSync.question(prompt));
  return num;
}

let firstNum = askNum('Enter the first number: ');
let secondNum = askNum('Enter the second number: ');
console.log(multiply(firstNum, secondNum));


