const button = document.querySelector("button");
const link = document.querySelector("a");
/* console.dir(button);
button.onclick = function () {
  console.log("click");
};

button.onclick = function () {
  console.log("click2");
}; */

/* button.addEventListener("click", function () {
  console.log("click");
});

button.addEventListener("click", function (e) {
  console.log(e);
});

button.addEventListener("click", (e) => {
  console.log(this);
});

function clickHandler(e) {
  e.preventDefault();
  console.log(this);
  console.log("clicl");
}

link.addEventListener("click", clickHandler); */

/* link.removeEventListener("click", clickHandler); */

const container = document.querySelector(".container");

button.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.log("button click");
  }
});
