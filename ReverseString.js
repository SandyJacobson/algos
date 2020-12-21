function reverseString(str) {
  const reverseStr = str.split('').reverse().join('')
  return reverseStr;
}

reverseString("hello");