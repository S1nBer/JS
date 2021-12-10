const div = document.querySelector("div");
const titles = document.querySelectorAll("hi");

console.log(div.parentElement);

const link = div.querySelector(".link");
console.log(link.parentElement);
console.log(link.closest(".content"));

div.classList.add("article", "custom");
div.classList.remove("article");
div.classList.toggle("toggle");
div.classList.toggle("toggle");
console.log(link.href);
console.log(div.classList);

div.setAttribute("id", "myId");
div.removeAttribute("id");
div.getAttribute("id");
div.hasAttribute("id");

div.dataset.myattr;
