//1
function minus(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
}

console.log(minus(10)(6));

//2
function multiplyMaker(val1 = 2) {
  value = val1;
  return function (val2 = 1) {
    return (value *= val2);
  };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));

//3
function stringMethods() {
  value = "";
  return {
    newString(str = "") {
      value = String(str);
    },
    getString() {
      return value;
    },
    getLength() {
      return value.length;
    },
    getReverse() {
      return value.split("").reverse().join("");
    },
  };
}

const str = stringMethods();
console.log(str.newString("Hello"));
console.log(str.getString());
console.log(str.getLength());
console.log(str.getReverse());

//4
function calc() {
  value = 0;
  return {
    newValue(num = 0) {
      value = num;
      return this;
    },
    plusVal(num) {
      value += num;
      return this;
    },
    multVal(num) {
      value *= num;
      return this;
    },
    minusVal(num) {
      value -= num;
      return this;
    },
    divideVal(num) {
      value /= num;
      return this;
    },
    sqrVal(num) {
      value **= num;
      return this;
    },
    getVal() {
      return value.toFixed(2);
    },
  };
}

const calculator = calc();
console.log(calculator.newValue(5).multVal(2).sqrVal(2).getVal());
