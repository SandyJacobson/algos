
  
  // Split the string into an array
  // Then sort the array by its elements length, from longest to shortest
  // Since the first element of the array will be the longest, then return the length of the first element

const findLongestWord = str => {

  const longestWord = str.split('').sort(function (a, b) { return b.length - a.length; });
  return longestWord[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");bv 