//9
function firstFunc(arr, fn) {
  let str = [];
  for (let value of arr) {
    str.push(fn(value));
  }
  if (fn.name === "handler1") {
    return `New value: ${str.join("")}`;
  }
  return `New value: ${str.join(", ").trim() + ","}`;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

function handler2(el) {
  return el * 10;
}

function handler3(el) {
  return `${el.name} is ${el.age}`;
}

function handler4(el) {
  return el.split("").reverse().join("");
}

console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));
console.log(firstFunc([10, 20, 30], handler2));
console.log(
  firstFunc(
    [
      { age: 45, name: "John" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);
console.log(firstFunc(["abc", "123"], handler4));

//10
function every(arr, fn) {
  if (Array.isArray(arr) || typeof fn === "function") {
    return new Error("mimo-mimo");
  } else {
  }

  //Не понял, что именно надо сделать, ответы ясности тоже не придали
}
