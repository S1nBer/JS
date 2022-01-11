/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 1000);
});

console.log(promise);
promise
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y))
  .catch((err) => console.log(err));

promise.then((z) => console.log(z)); */

function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = customHttp();

/* myHttp.get(`https://jsonplaceholder.typicode.com/posts`, (err, res) => {
  if (err) {
    console.log("error", err);
    return;
  }
  myHttp.get(
    `https://jsonplaceholder.typicode.com/comments?postId=1`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        return;
      }
      myHttp.get(`https://jsonplaceholder.typicode.com/users/1`, (err, res) => {
        if (err) {
          console.log("error", err);
          return;
        }
        console.log("finally");
      });
    }
  );
}); */

function getPosts(id) {
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostsComments(post) {
  const { id } = post;
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: res });
      }
    );
  });
}

function getUserCreatedPost(data) {
  const {
    post: { userId },
  } = data;
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      }
    );
  });
}

getPosts(50)
  .then((post) => getPostsComments(post))
  .then((data) => getUserCreatedPost(data))
  .then((fullData) => console.log(fullData))
  .catch((error) => console.log(error))
  .finally(() => console.log("heh"));

function getPosts2(id) {
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostsComments2(id) {
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getUserCreatedPost2(userId) {
  return new Promise(function (resolve, reject) {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

Promise.all([getPosts2(1), getPostsComments2(1), getUserCreatedPost2(1)])
  .then((fullData) => {
    console.log(fullData);
  })
  .catch((error) => {
    console.error(error);
  });
