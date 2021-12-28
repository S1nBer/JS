const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

getPosts((response) => {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.name;
    title.addEventListener("click", (e) => {
      let arrOfUsers = [[], []];
      Object.keys(post).forEach((prop) => {
        arrOfUsers[0].push(prop);
      });
      Object.values(post).forEach((prop) => {
        arrOfUsers[1].push(prop);
      });
      const article = document.createElement("p");
      article.classList.add("card-text");
      article.innerHTML = renderInfo(arrOfUsers);
      cardBody.appendChild(article);
    });
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
});

function renderInfo(arr) {
  let i = 0;
  let str = "";
  let newArr = [[], []];
  while (i < arr[0].length) {
    if (typeof arr[1][i] === "string" || typeof arr[1][i] === "number") {
      str += `${arr[0][i]}: ${arr[1][i]} <br>`;
    } else if (typeof arr[1][i] === "object") {
      str += `${arr[0][i]}: <br>`;
      Object.keys(arr[1][i]).forEach((prop) => {
        newArr[0].push(prop);
      });
      Object.values(arr[1][i]).forEach((prop) => {
        newArr[1].push(prop);
      });
      str += renderInfo(newArr);
      newArr = [[], []];
    }
    i++;
  }
  return str;
}
