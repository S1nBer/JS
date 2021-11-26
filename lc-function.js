(function (msg) {
  console.log(msg);

  function sayHello(firstName = "Default", lastName = "Default") {
    console.log(firstName, lastName);
    console.log("Hello");
    return `Hello, ${firstName} ${lastName}`;
  }

  /* let res = sayHello("Andrei", "Gerasimenko");
  let res2 = sayHello("Dron", "Baron") + "!";
  let res3 = sayHello(null);
  
  console.log(res);
  console.log(res2);
  console.log(res3); */

  /* let x = 10;
  
  function foo(x) {
    x = 20;
    console.log(x);
    return x;
  }
  
  foo();
  
  console.log(x); */

  /* const user = {
    name: "Andrei",
    age: 22,
  };
  
  function getObj(obj) {
    obj.name = "Andro";
  }
  
  getObj(user);
  console.log(user); */

  const square = function (x) {
    return x * x;
  };
})("Hello");

//arguments
function foo(x) {
  console.log(x);
  console.log(arguments[2]);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo(11, "some", [1, 2]);
