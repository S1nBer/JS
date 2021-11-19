let value;

value = String(10);
value = String(10+40);
value = (40).toString();

//boolean

value = String(true);

//array

value = String([1,2,3]);

//Object

value = String({name: 'Denis'});
value = 30 + '' + undefined;
value = 30 * '5';
value = true + 10;
value = false + undefined;

//string

value = Number('23');
value = Number(false);
value = Number(null);
value = Number('false');
value = Number([1,2,3]);

value = parseInt('ad200');
value = parseFloat('200.5fg');

//boolean

value = Boolean('hello');
value = Boolean(' ');
value = Boolean(19);
value = Boolean(0);
value = Boolean(0.8);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);
value = Boolean(undefined);


console.log(value);
console.log(typeof value);