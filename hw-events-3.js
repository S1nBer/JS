const colors = [
  "red",
  "blue",
  "olive",
  "orange",
  "pink",
  "yellow",
  "green",
  "gray",
  "aqua",
  "brown",
];

const boxes = document.querySelectorAll(".box");
[...boxes].forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    e.stopPropagation();
    let square = box;
    let allBoxes = [square];
    while (square.children.length !== 0) {
      square = square.children[0];
      allBoxes.push(square);
    }
    allBoxes.forEach((el, i) => {
      setTimeout(setColor, 200 * (1 + i), el);
    });
  });
});

[...boxes].forEach((box) => {
  box.addEventListener("mouseleave", (e) => {
    box.style.removeProperty("background");
  });
});

function random() {
  return Math.floor(Math.random() * 10);
}

function setColor(el) {
  el.style.background = colors[random()];
}
