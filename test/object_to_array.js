const user = {
  name: 'sudeep',
  age: 23,
  ismarrid: false,
};

function objtoarray(obj) {
  let valarray = [];
  let keyarray = [];

  for (let key in obj) {
    valarray.push(key);
    keyarray.push(obj[key]);
  }

  return [valarray, keyarray];
}

console.log(...objtoarray(user));
