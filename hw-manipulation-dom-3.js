//1
const ul = document.querySelector("ul");
const length = document.querySelector("ul").children.length;
console.log(length);

for (let i = 0; i < 2; i++) {
  let item = document.createElement("li");
  item.classList.add("new-item");
  item.textContent = `item ${length + i + 1}`;
  ul.appendChild(item);
}

//2
[...document.querySelectorAll("ul li a")].forEach((el) => {
  const item = document.createElement("strong");
  el.appendChild(item);
});

//3
/* let img = document.createElement("img");
img.src =
  "https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg";
img.alt = "Картинка"; */
let body = document.body;
/* [...body.children].unshift(img); */
body.insertAdjacentHTML(
  "afterbegin",
  '<img alt="Картинка" src="https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg"></img>'
);

//4
const mark = document.querySelector("mark");
mark.textContent += " green";
mark.classList.add("green");

//5
const sortList = [...ul.children].sort((prev, next) =>
  prev.textContent < next.textContent ? 1 : -1
);

ul.innerHTML = "";
sortList.forEach((el) => ul.appendChild(el));
