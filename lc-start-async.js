console.log(1);
console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

function a() {
  console.log("a");
}

function b() {
  console.log("b");
}

a();
b();
