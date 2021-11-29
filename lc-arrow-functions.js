const plus = (x, y) => x + y;

console.log(plus(1, 2));

const without = () => console.log("Hello world");
const singleArg = (x = 1) => x * 2;
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

plusFoo(1, 2, 3);

const obj = {
  firstName: "Andrei",
  getFirstName() {
    console.log(this);
  },
  age: 22,
  getAgeArrow: null,
  getAge() {
    /* this.getAgeArrow = () => console.log(this); */
    setTimeout(() => console.log(this));
  },
};

obj.getAge();
/* obj.getAgeArrow(); */
