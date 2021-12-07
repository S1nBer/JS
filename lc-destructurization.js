const user = {
  firstName: "Andrei",
  lastName: "Gerasimenko",
  age: 24,
  info: {
    work: "Roowix",
    skills: ["html", "css"],
  },
};

/* const firstName = user.firstName;
const lastName = user.lastName; */

/* const { firstName: name, lastName, age: years = 22 } = user;

console.log(years); */

let {
  info: { work },
} = user;
work = "NSTU";
console.log(work);
console.log(user.info.work);

const colors = ["white", "black", "pink", "000000"];
const [w, b, pink, green = "green"] = colors;
console.log(w, green);
const names = ["Andrei", "Timur", "Anton", "Ilya"];
const [, , name2, name3] = names;
console.log(name2, name3);

const nestedArr = ["hello world", ["key", "value"]];
const [, [key, value]] = nestedArr;
console.log(key, value);

//rest, spread
const [name1, ...otherNames] = names;
console.log(name1, otherNames);
const newNames = [...names];
/* console.log(...newNames); */
const colorNames = ["some value", ...colors, ...names];
console.log(colorNames);
const newUser = { ...user, age: 30 };
console.log(newUser);
const {
  info: {
    skills: [html, css],
  },
} = newUser;
console.log(html, css);

function myPerson({
  lastName = "Biba",
  firstName = "Boba",
  info: { skills } = {},
} = {}) {
  console.log(skills);
}

myPerson(newUser);

function foo(x, y, ...others) {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
  console.log([...arguments]);
  console.log(others);
}

foo(1, 2, 5, 6);

const numbers = [2, 3, 5];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...numbers);
