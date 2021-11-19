//numbers

const num1 = 10;
const num2 = 20;
let value;

// + - * / %
value = num1 + num2;
value += 100;
value = 5 % 2;

value--;
++value;

value = 0.6 + 0.7;
/* value = +value.toFixed(1); */
value = (0.6 * 10 + 0.7 * 10) / 10;

//Math

value = Math.PI;
value = Math.random();
value = Math.round(2.49);
value = Math.ceil(2.09);
value = Math.floor(2.9);
value = Math.min(3, 4, 8, 6 , 5);
value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'white', 'blue', 'green', 'orange', 'pink'];
value = arr[Math.floor(Math.random() * arr.length)];
console.log(value);