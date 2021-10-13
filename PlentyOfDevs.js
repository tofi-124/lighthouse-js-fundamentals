function ageCalculator(name,yearOfBirth,currentYear){
  let n = name;
  let yob = yearOfBirth;
  let cyr = currentYear;
  
  return n + " is " + (cyr - yob) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));