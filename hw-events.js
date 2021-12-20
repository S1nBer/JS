//1
const btnMsg = document.querySelector("#btn-msg");

btnMsg.addEventListener("click", () => {
  alert(btnMsg.getAttribute("data-text"));
});

//2
btnMsg.addEventListener("mouseover", () => {
  btnMsg.style.background = "rgb(255, 0, 0)";
});

btnMsg.addEventListener("mouseleave", () => {
  btnMsg.style.removeProperty("background");
});

//3
const tag = document.querySelector("#tag");
const text = tag.textContent;

document.body.addEventListener("click", (e) => {
  /* console.log(e.target.tagName); */
  tag.textContent = text;
  tag.textContent += e.target.nodeName;
});

//4
const btnGenerate = document.querySelector("#btn-generate");
const ul = document.querySelector("ul");

btnGenerate.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(li);
});
