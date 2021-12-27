const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
  {
    _id: "5d220b1083a0494655krlmf6",
    isActive: false,
    balance: 1200,
    age: 22,
    name: "Gerasimenko Andrei",
    gender: "male",
    company: "ROOWIX",
    email: "a.gerasimenko@roowix.com",
    phone: "+7 (965) 828-4089",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 100 },
  },
];

(function (arrOfUsers) {
  const objOfUsers = arrOfUsers.reduce((acc, user) => {
    acc[user._id] = {
      Name: user.name,
      Email: user.email,
      Balance: user.balance,
    };
    return acc;
  }, {});

  const user = users[0];
  const thNames = {
    number: "#",
    name: "Name",
    email: "Email",
    balance: "Balance",
  };
  const totalBalance = Object.values(users).reduce((sum, user) => {
    sum += user.balance;
    return sum;
  }, 0);

  renderTable(objOfUsers);

  function renderTable(users) {
    const tb = createTable(objOfUsers);
    document.body.appendChild(tb);
    Object.values(users).forEach((user, ind) => {
      const tr = createTr(user, ind);
      tb.appendChild(tr);
    });
    const total = document.createElement("tr");
    const td = document.createElement("td");
    const columnCounts = Object.keys(thNames).length;
    td.insertAdjacentHTML("beforeend", `Total balance: <b>${totalBalance}</b>`);
    td.setAttribute("colspan", columnCounts);
    td.setAttribute("align", "right");
    total.appendChild(td);
    tb.appendChild(total);
  }

  function createTable(obj) {
    const tb = document.createElement("table");
    const tr = document.createElement("tr");
    Object.values(thNames).forEach((el) => {
      const th = document.createElement("th");
      th.textContent = el;
      tr.appendChild(th);
    });
    tb.appendChild(tr);
    tb.border = "1";
    return tb;
  }

  function createTr(user, ind) {
    const tr = document.createElement("tr");
    const numb = document.createElement("td");
    numb.textContent = ind + 1;
    tr.appendChild(numb);
    Object.values(user).forEach((prop) => {
      const td = createTd(prop);
      tr.appendChild(td);
    });

    return tr;
  }

  function createTd(prop) {
    const td = document.createElement("td");
    td.textContent = prop;
    return td;
  }
})(users);
