let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let length = array.map(function(value) {
    return value.length;
  });
  let parse = length.filter(function(num) {
    return num % 2 !== 0; 
  });
  return parse;	  
}

console.log(oddLengths(arr));
