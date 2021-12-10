//1
const p = document.querySelector("p");
console.log(p.textContent);
//2
function elementInfo(item) {
  return {
    type: item.nodeType,
    name: item.tagName,
    children: item.childNodes.length,
  };
}

console.log(elementInfo(p));

//3
const ul = document.querySelector("ul");
const arr = ul.querySelectorAll("a");
const arrOfContent = [...arr].map((el) => el.textContent);
console.log(arrOfContent);

//4
[...p.childNodes].forEach((el) => {
  if (el.nodeType === 3) {
    el.textContent = "-text-";
  }
});
