const div = document.querySelector("div");
const title = document.querySelector("h1");
title.innerHTML = "<span>text</span>";
title.textContent = "<br>new text";
/* title.appendChild("<span>appen</span>"); */
title.insertAdjacentHTML("beforebegin", "<h2>title h2</h2>");

title.innerHTML += "<span>new text</span>";
const span = title.querySelector("span");
console.log(span);
/* title.innerHTML += "<span>new text</span>"; */
span.textContent = "asd";

// *Create element
const span2 = document.createElement("span");
span2.textContent = "span created by createElement";
span2.classList.add("myClass");
console.log(span2);
title.appendChild(span2);

div.appendChild(span2);

const fragment = document.createDocumentFragment();
console.log(fragment);
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  item.classList.add(`bg-${color}`);
  item.style.backgroundColor = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// *Delete elements
/* title.remove(); */
title.parentElement.removeChild(title);
