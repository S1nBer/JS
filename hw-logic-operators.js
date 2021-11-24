//1
let a = 0 || 'string';
a = 1 && 'string';
a = null || 25;
a = null && 25;
a = null || 0 || 35;
a = null && 0 && 35;

console.log(a);

//2
console.log(12+14+'12');
console.log(3 + 2 - '1');
console.log('3'+2-1);
console.log(true + 2);
console.log(+'10' + 1);
console.log(undefined + 2);
console.log(null + 5);
console.log(true + undefined);

//3
let x = 0;
if (x === 'hidden') {
    x = 'visible';
} else {
    x = 'hidden';
}

console.log(x);

//4
let y = 0;

if (y === 0) {
    y = 1;
} else if (y < 0) {
    y = 'less then zero';
} else {
    y *= 10; 
}

//5
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(car.needRepair);

//6
let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
item.discount = parseInt(item.discount);
item.price = parseInt(item.price);

if (!isNaN(item.price) && !isNaN(item.discount)) {
    item.priceWithDiscount = 0;
    item.priceWithDiscount = item.price * (100 - item.discount) / 100;
    console.log(item.priceWithDiscount)
  } else {
    console.log(item.price);
}

//7
let product = {

    name: 'Яблоко',
    
    price: '10$',
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

const price = parseInt(product.price);

if (price >= min && price <= max) {
    console.log(product.name);
} 