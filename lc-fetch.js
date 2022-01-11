/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err)); */

function getPosts(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

/* getPosts(100).then((post) => console.log(post)); */

function getPosts2(id) {
  const [userType, userId] = id.split("-");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
    (response) => {
      return response.json();
    }
  );
}

getPosts3(1)
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

function getPosts3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-");
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
      (response) => {
        return response.json();
      }
    );
  });
}
