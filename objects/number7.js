let myProtoObj = {
	  foo: 1,
	  bar: 2,
};

myObj = Object.create(myProtoObj);

myObj.qux = 3;

//The result will be different. 
//
//The first snippet will not produce the properties from the inherited object but the second snippet the for/in loop will. 
//

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
	  console.log(key);
});

for (let key in myObj) {
	  console.log(`This is a for/in loop: ${key}.`);
}


