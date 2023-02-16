let readlineSync = require('readline-sync');
let firstName = readlineSync.question('What is your first name? ');
let lastName = readlineSync.question('What is your last name? ');
console.log(`Heelo, ${firstName} ${lastName}!`);


