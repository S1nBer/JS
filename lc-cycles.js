//while, do while, for, for of, for in

/* let i = 10;

while(i--) {
    console.log(i);
}

do {
    console.log('action');
} while(i > 0); */

/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
} */

/* let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
    console.log(str[i] + '!');
    res += str[i] + '*';
}

console.log(res); */

/* let colors = ['white', 'blue', 'yellow', 'green', 'black'];

for (i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
}

console.log(colors); */

const users = [
    {
        name: 'Andrei',
        age: 22,
    },
    {
        name: 'Dalmat',
        age: 27,
    },
    {
        name: 'Feodar',
        age: 18,
    },
    {
        name: 'Oldaron',
        age: 45,
    },
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
    usersObj[users[i].name] = users[i];
}

/* console.log(usersObj['Andrei']); */

const user = {
    name: 'Andrei',
    age: 22,
};

/* for (let key in usersObj) {
    console.log(key);
    console.log(usersObj[key]);
} */

for (let value of users) {
    console.log(value);
}