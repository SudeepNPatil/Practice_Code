function isanagram(s1, s2) {
  let str1 = s1.split('').sort().join('');
  let str2 = s2.split('').sort().join('');

  if (str1 === str2) {
    return true;
  }

  return false;
}

console.log(isanagram('anagram', 'gramana'));
