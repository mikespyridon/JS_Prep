let array = [3, 5, 7]; 

function sumOfSquares(currentValue) {
  return currentValue.reduce((accumulator, currentValue) => {
    return accumulator + currentValue * currentValue;
  }, 0);
}

console.log(sumOfSquares(array));
