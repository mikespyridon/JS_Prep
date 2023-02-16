let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');
let decade = 10; 
age = parseInt(age);

for (i = 0; i < 4; i += 1) {
  console.log(`In ${decade} years, you will be ${age + 10} years old.`); 
  decade += 10;
  age += 10;
}



//console.log(`In 10 years, you will be ${age + 10} years old.`);
//console.log(`In 20 years, you will be ${age + 10} years old.`);
//console.log(`In 30 years, you will be ${age + 10} years old.`);
//console.log(`In 40 years, you will be ${age + 10} years old.`);



