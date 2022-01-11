const str = new String("hello world");
/* console.log(str); */

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

/* console.log(apple.getPriceWithDiscount());
console.log(samsung); */

const protoForObj = {
  sayHello() {
    return "Hello World!";
  },
};

const obj = Object.create(protoForObj, {
  firstName: { value: "Andrei" },
});

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User("Andrei", "Gerasimenko");

// Customer
function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName);

  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype);
// return constructor link
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Tobi", "Maquayr", "basic");
