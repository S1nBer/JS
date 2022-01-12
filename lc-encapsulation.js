/* const User = {
  name: "Andrei",
  getName() {
    return this.name;
  },
  senName(name) {
    this.name = name;
  },
}; */

/* function User(name) {
  let userName = name;

  return {
    getName() {
      return userName;
    },
    senName(name) {
      userName = name;
    },
  };
}

const andrei = new User("Andrei"); */

/* function User(name) {
  let userName = name;

  return Object.freeze({
    getName() {
      return userName;
    },
    senName(name) {
      userName = name;
    },
  });
}

const andrei = new User("Andrei"); */

function User(name) {
  const symbol = Symbol();
  return {
    [symbol]: name,
    getName() {
      return this[symbol];
    },
    senName(name) {
      this[symbol] = name;
    },
  };
}

const andrei = new User("Andrei");
