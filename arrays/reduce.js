let strings = ['m', 'i', 'k', 'e'];
strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()}, '');

console.log(strings);
