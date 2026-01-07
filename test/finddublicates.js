function dublicate(array) {
  let dublicatevalues = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        if (array[i] === array[j]) {
          if (!dublicatevalues.includes(array[j]))
            dublicatevalues.push(array[j]);
        }
      }
    }
  }

  return [dublicatevalues, removeddublicates];
}

console.log(...dublicate([1, 2, 3, 4, 5, 6, 1, 3, 5]));
