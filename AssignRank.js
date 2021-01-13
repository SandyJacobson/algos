let assignRank = (array, target) => {
  if (target < array[0] || target === array[0]) return (1);
  let rank = 1;
  let prev = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] !== prev) {
      rank += 1
      prev = array[i]
    }
    if (target <= array[i]) {
      return rank
    }
  }
  return ++rank
}

assignRank([1, 1, 1, 2, 3, 3, 4, 5, 7, 9, 50, 99], 9)