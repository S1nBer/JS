//1
function multiply() {
  let x = 1;
  if (!arguments.length) {
    return 0;
  }
  console.log(arguments);
  for (let number of arguments) {
    x *= number;
  }
  return x;
}

let value = multiply(2, 4, 5, 6);

console.log(value);

//2
function reverse(str) {
  if (typeof str === "string") {
    return '"' + str.split("").reverse().join("") + '"';
  } else {
    str = "" + str;
    return str.split("").reverse().join("");
  }
}

let value1 = reverse();

console.log(value1);

//3
function returnCode(x) {
  x += "";
  res = "";
  for (let char of x) {
    res += char.charCodeAt() + " ";
  }
  return res.trim();
}

let value2 = returnCode("hello");

console.log(value2);

//4
function guessNumber(numb) {
  if (numb > 10 || numb < 0) {
    console.error("Please provide number in range 0-10");
  } else if (typeof numb !== "number") {
    console.error("Please provide a valid number");
  } else {
    let res = Math.floor(Math.random() * 10 + 1);
    if (res === numb) {
      console.log("You win!");
    } else {
      console.log(`You are lose, your number is ${numb}, the random is ${res}`);
    }
  }
}

guessNumber(2);
