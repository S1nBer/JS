function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`;
  };
}

const getName = getFullName("Andrei", "Gerasimenko");
/* console.log(getName()); */

function updateValue(val = 0) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}

const updateVal = updateValue(2);
const updateVal1 = updateValue(4);
/* console.log(updateVal(1));
console.log(updateVal(2));
console.log(updateVal1(2));
console.log(updateVal1(0)); */

function checkCred() {
  const login = "test";
  const pass = "somePassword";

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPass(value) {
      return pass === value;
    },
  };
}

const check = checkCred();

/* console.log(check.checkLogin("gaga")); */

function closureExample() {
  const arrOfFunc = [];

  for (let i = 0, value = ""; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }

  return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();
