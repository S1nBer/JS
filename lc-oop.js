const str = new String("hello world");
console.log(str);

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (price) {
  this.price = price;
};

const apple = new Product("apple", 100, 15);
const samsung = new Product("samsung", 50, 10);

console.log(apple.getPriceWithDiscount());
console.log(samsung);
