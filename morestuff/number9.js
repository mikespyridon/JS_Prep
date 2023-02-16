
function numberTest(num) {
  if (1 / num  === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(numberTest(-0));
console.log(numberTest(0));
console.log(numberTest(9));
