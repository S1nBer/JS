//1
function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4));

//2
let value = (num) => ({
  value: num,

  isOdd: Boolean(num % 2),
});

console.log(value(4));
