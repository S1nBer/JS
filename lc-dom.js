const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
console.log(titles);
console.log(Array.from(titles));
console.log(Array.prototype.slice.call(titles));
console.log([...titles]);

const h1 = document.getElementsByTagName("h1");
console.log(h1);
