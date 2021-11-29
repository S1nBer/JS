//5
function getArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(getArray(9));

//6
function doubleArr(arr) {
  return arr.concat(arr);
}

console.log(doubleArr([1, 2, 3, 4]));

//7
function changeArr() {
  let res = [];
  for (let value of arguments) {
    if (Array.isArray(value)) {
      value.shift();
      res.push(value);
    }
  }
  return res;
}

console.log(changeArr([1, 2, 3], ["two", "one", "three"]));

//8
const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function filterUsers(users, field, value) {
  if (arguments.length === 3) {
    let newUsers = [];
    for (let user of users) {
      if (user[field] === value) {
        newUsers.push(user);
      }
    }
    return newUsers;
  } else {
    return new Error("Error message");
  }
}

console.log(filterUsers(users, "gender", "female"));
