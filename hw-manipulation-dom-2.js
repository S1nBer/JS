//1
const ul = document.querySelector("ul");
ul.classList.add("list");

//2
const link = document.querySelector("ul ~ a");
link.id = "link";

//3
[...ul.children]
  .filter((x, i) => i % 2 === 0)
  .forEach((el) => el.classList.add("item"));

//4

[...document.querySelectorAll("a")].forEach((el) =>
  el.classList.add("custom-link")
);
