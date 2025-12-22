function missingnumber(array) {
  let n = array.length;

  let sumofnaturalnumber = n * ((n + 1) / 2);
  let actualsum = 0;
  for (let i = 0; i < array.length; i++) {
    actualsum = actualsum + array[i];
  }

  let missingnum = sumofnaturalnumber - actualsum;

  return missingnum;
}

console.log(missingnumber([0, 1, 2, 3, 4, 6]));
