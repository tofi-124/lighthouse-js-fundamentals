function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

function sayHelloToConsole(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

function returnSayHello(name) {
  return "Hello, " + name;
}

function returnSayHello(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);

const isEven = function (num) {
  return num % 2 === 0;
};
