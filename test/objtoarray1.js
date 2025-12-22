const user = {
  name: 'sudeep',
  age: 23,
  ismarrid: false,
};

function objtoarray1(obj) {
  let array = [];

  for (let key in obj) {
    array.push({ [key]: obj[key] });
  }

  return array;
}

console.log(objtoarray1(user));
