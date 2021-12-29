const form = document.forms["form"];
const container = document.querySelector(".container");
const inputName = form.elements["name"];
const inputEmail = form.elements["email"];
const inputPhone = form.elements["phone"];
const inputWebsite = form.elements["website"];

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const man = Object.entries(post);
  man.pop();
  Object.values(man).forEach((value) => {
    const article = document.createElement("p");
    article.classList.add("card-text");
    article.textContent = `${value[0]}: ${value[1]}`;
    cardBody.appendChild(article);
  });
  card.appendChild(cardBody);
  return card;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPerson = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    website: inputWebsite.value,
  };
  createPost(newPerson, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
  });
});
