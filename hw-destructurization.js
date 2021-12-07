//1
function arg(...args) {
  let [firstEl, ...lastEl] = args;
  return { firstEl, lastEl };
}

console.log(arg("a", "b", "c", "d"));

//2
const organisation = {
  name: "Google",

  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo({
  name = "Unknown",
  info: {
    employees: [],
    partners: [first, second],
  },
}) {
  console.log(`Name: ${name}
Partners: ${first} ${second}`);
}

getInfo(organisation);

//3
let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
  isActive: false,
  balance: "$2,474.46",
  age: 30,
  eyeColor: "blue",
  name: "Tameka Maxwell",
  gender: "female",
  company: "ENOMEN",
  email: "tamekamaxwell@enomen.com",
  phone: "+1 (902) 557-3898",
  tags: ["aliquip", "anim", "exercitation", "non"],
  friends: [
    {
      id: 0,
      name: "Barber Hicks",
    },
    {
      id: 1,
      name: "Santana Cruz",
    },
    {
      id: 2,
      name: "Leola Cabrera",
    },
  ],
};

//3.1
const { name, balance, email } = user;
console.log(name, balance, email);
//3.2
const { tags } = user;
const [firstElem, ...otherEl] = tags;
console.log(firstElem, otherEl[otherEl.length - 1]);
//3.3
const { friends } = user;
const [firstElement] = friends;
const { name: name2 } = firstElement;
console.log(name2);

//4
const { tags: newTags, friends: newFriends } = user;
const arr = [...newTags, ...newFriends];
console.log(arr);
