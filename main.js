let obj1 = {
  x: 10,
  y: 20,
  age: 20,
};

console.log(obj1);

let obj2 = {
  x: 20,
  y: 20,
  z: 35,
  age: 30,
};

console.log(obj2);

let obj3 = {
  x: 20,
  y: 20,
  z: 60,
  a: 15,
  age: 45,
};

console.log(obj3);

function assignObjects(src) {
  let assignedObject = {};

  for (let i = 0; i < arguments.length; i++) {
    let prop = arguments[i];
    for (let key in prop) {
      assignedObject[key] = prop[key];
      }
    } return assignedObject;
  }

console.log(assignObjects(obj1, obj2, obj3));
