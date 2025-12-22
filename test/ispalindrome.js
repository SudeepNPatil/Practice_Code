function ispalindrome(ispal) {
  let start = 0;
  let end = ispal.length - 1;

  while (start < end) {
    if (ispal[start] !== ispal[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(ispalindrome('some'));
