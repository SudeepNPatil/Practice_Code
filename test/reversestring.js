function reverse(string) {
  let sum = [...string];
  let first = 0;
  let last = string.length - 1;
  while (first < last) {
    let temp = sum[first];
    sum[first] = sum[last];
    sum[last] = temp;
    first++;
    last--;
  }

  return sum.join('');
}

console.log(reverse('sudeep'));
