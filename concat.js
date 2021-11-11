function concat(firstArray = [], secondArray = []) {
  var con = [];
  var j = 0;

  while (j < firstArray.length) {
    con[j] = firstArray[j];
    j++;
  }

  j = 0;
  while (j < secondArray.length) {
    con.push(secondArray[j]);
    j++;
  }

  return con;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
