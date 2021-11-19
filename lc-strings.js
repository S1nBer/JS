const firstName = 'Andrei';
const lastName= 'Gerasimenko';
const age = 22;
const str = 'Hello, my name is Andrei';

let value;

value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 11);
value = str.indexOf('h');
value = str.includes('AndR');

value = str.slice(0, 5);
value = str.slice(0, -6);

value = str.replace('Andrei', 'Daro');

console.log(value);