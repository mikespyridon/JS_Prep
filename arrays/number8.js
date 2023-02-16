let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(strings) {
  return strings.reduce((filteredArray, string) => {
    let length = string.length;
    if (length % 2 === 1) {
      filteredArray.push(length);
    }

    return filteredArray;	  
  }, []);
}	

console.log(oddLengths(arr));
