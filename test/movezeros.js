function movezero(array) {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[j] = array[i];
      j++;
    }
  }

  for (; j < array.length; j++) {
    array[j] = 0;
  }

  return array;
}

console.log(movezero([0, 1, 5, 0, 1, 3, 0, 2, 3, 5]));
