let str = "Hello World";
console.dir(String("hello").slice(1, -1));

const strObj = new String("hello");
console.log(strObj);

console.dir(Number);
console.dir(Boolean);

var arr = [0, 1, 2, 4];
console.log(arr.indexOf(3));

let a,
  x,
  c = [1, 2, 3, 4, 5];
console.log(a, c);

console.log("3" + -" ");

var foo = {
  bar: function () {
    return this.baz;
  },
  baz: 1,
};
console.log(
  (function () {
    return typeof arguments[0]();
  })(foo.bar)
);
