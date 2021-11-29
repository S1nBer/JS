//1
const rectangle = {
  width: 5,
  height: 4,
  getSquare: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.getSquare());

//2
const price = {
  price: 10,
  discount: "15%",
  getPrice: function () {
    return this.price;
  },
  getPriceWithDiscount: function () {
    return this.price * (1 - parseInt(this.discount) / 100);
  },
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//3
const obj = {
  height: 10,
  inc: function () {
    this.height++;
  },
};

console.log(obj.height);
obj.inc();
console.log(obj.height);

//4
const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value++;
    return this;
  },
  minusOne: function () {
    this.value--;
    return this;
  },
};

console.log(numerator.plusOne().double().minusOne().value);

//5
const apples = {
  price: 90,
  count: 10,
  getPriceOfAll: function () {
    return this.price * this.count;
  },
};

console.log(apples.getPriceOfAll());

//6
const details = {
  price: 50,
  count: 20,
};

console.log(apples.getPriceOfAll.call(details));

//7
let sizes = { width: 5, height: 10 };
getSquare = function () {
  return this.width * this.height;
};

console.log(this.getSquare.call(sizes));

//8
let element = {
  height: 25,

  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());
