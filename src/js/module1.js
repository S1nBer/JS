/* const config = {
  apiUrl: 'demo.com',
};

function myFunction() {
  console.log('module1, myFunction');
}

export { config as conf, myFunction as foo }; */

function myFunction() {
  console.log("module1, myFunction");
}

const config = {
  apiUrl: "demo.com",
};

export { config as conf, myFunction as foo };
