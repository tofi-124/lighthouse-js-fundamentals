function lastIndexOf(index = [], of) {
  var i = 0;
  var pl = -1;
  while (i < index.length) {
    if (of === index[i]) {
      pl = i;
    }
    i++;
  }
  return pl;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
