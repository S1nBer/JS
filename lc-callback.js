/* function foo() {
  console.log("Hello World");
}

foo();

foo.field = "Andrei";

console.log(foo.field); */

const arr = ["Delon", "Izmail", "Fordran", "Talos", "Shon"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  return el;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

/* console.log(mapArray(arr, nameLength));
console.log(mapArray(arr, nameToUpperCase)); */

function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

/* const testGreening = greeting("Andrei");
console.log(testGreening);
const fullName = testGreening("Gerasimenko"); */
const fullName = greeting("Andrei")("Gerasimenko");
/* console.log(fullName); */

function question(job) {
  const jobDictionary = {
    developer: "что такое JavaScript;",
    teacher: "какой предмет вы ведете?",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}

const developerQuestion = question("developer");
console.log(developerQuestion("Andrei"));
