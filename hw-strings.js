let string = "some test string";

//1
console.log(string[0], string[string.length - 1]);

//2
console.log(string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase());

//3
console.log(string.indexOf('string'));

//4
console.log(string.indexOf(' ', (string.indexOf(' ') + 1)));

//5
console.log(string.substr(4, 4));

//6
console.log(string.slice(4, 8));

//7
console.log(string.slice(0, -6));

//8
let a = 20;
let b = 16;
string = a + '' + b;

console.log(string);
