const user = ['sudeep', 'patil', 23, false];

function arraytoobj(array) {
  let obj = {};
  let count = 0;
  for (let val of array) {
    obj[count++] = val;
  }

  return obj;
}

console.log(arraytoobj(user));
