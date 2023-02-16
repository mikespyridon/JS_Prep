let objToCopy = {
	  foo: 1,
	  bar: 2,
	  qux: 3,
};

function createObj(obj, keys) {
  let newObject = {};

  if (keys) {
    keys.forEach(function(key) {
      newObject[key] = obj[key];
    });
    
    return newObject;
  } else {
    return Object.assign(newObject, obj); 
  }
}

let newObj = createObj(objToCopy);
console.log(newObj);

let newObj2 = createObj(objToCopy, [ 'foo', 'bar' ]);
console.log(newObj2);
