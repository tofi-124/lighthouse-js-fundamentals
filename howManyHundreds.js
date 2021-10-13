function howManyHundreds(num){
  let n = num
  n = num / 100;
  n.toFixed(0); 
  n = parseInt(n)
  return n;
}

console.log(howManyHundreds(1234))