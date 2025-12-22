function twosum(array, target) {
  let j = 0;
  let i = array.length - 1;
  while (j < i) {
    for (let k = j + 1; k < array.length; k++) {
      if (array[j] + array[k] === target) {
        return [j, k];
      }
    }
    j++;
  }

  return [];
}

console.log(twosum([0, 1, 3, 4, 5, 6], 11));
