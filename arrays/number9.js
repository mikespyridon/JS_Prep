let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


function checkNum(arr) {
  arr.forEach(function(num) {
    if (num === 3) {
      return true;
    } else {
      return false;
    }
  });	
}


checkNum(numbers1);
checkNum(numbers2);
checkNum(numbers3)

console.log(numbers1.includes(3));
