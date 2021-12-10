//1
//1.1
console.log(document.head);
//1.2
console.log(document.body);
//1.3
console.log(document.body.children);
//1.4
console.log(document.body.firstElementChild.children);
const div = document.body.firstElementChild.children;
console.log([...div].slice(1, -1));
//2
function isParent(parent, child) {
  if (parent instanceof HTMLElement && child instanceof HTMLElement) {
    return [...parent.childNodes].includes(child);
  }
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
