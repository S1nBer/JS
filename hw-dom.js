//1
//1.1
console.log(document.querySelector("head"));
//1.2
console.log(document.querySelector("body"));
//1.3
console.log(document.querySelector("body").childNodes);
//1.4
console.log(document.querySelector("div").childNodes);
const div = document.querySelector("div").childNodes;
console.log([...div].slice(1, -1));
//2
function isParent(parent, child) {
  return [...parent.childNodes].includes(child);
}

console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);

//3
console.log(
  [...document.querySelectorAll("a")].filter((el) => !el.closest("ul"))
);

//4
console.log(document.querySelector("ul").nextElementSibling);
console.log(document.querySelector("ul").previousElementSibling);
