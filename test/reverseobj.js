const user = {
  name: 'sudeep',
  age: 23,
  ismarrid: false,
};

function Reverseobj(user) {
  let revrseobj = {};

  for (let key in user) {
    revrseobj[user[key]] = key;
  }

  return revrseobj;
}

console.log(Reverseobj(user));
