//1
const arr = [1, 2, 3, 5, 8, 9, 10];

let val = arr.map((value) => ({
  digit: value,
  odd: value % 2 === 0 ? false : true,
}));

console.log(val);

//2
const arr1 = [12, 4, 50, 1, 0, 18, 40];

const isZero = arr1.some((value) => value === 0);
console.log(isZero);

//3
const arr2 = ["yes", "hello", "no", "easycode", "what"];

const isMore3 = arr2.every((value) => value.length > 3);
console.log(isMore3);

//4
const arr3 = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },

  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },

  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

const str = arr3
  .sort((prev, next) => prev.index - next.index)
  .reduce((acc, char) => {
    acc += char.char;
    return acc;
  }, "");

console.log(str);

//5
const arr4 = [[14, 45], [1], ["a", "c", "d"]];

const sortArr = arr4.sort((prev, next) => prev.length - next.length);
console.log(sortArr);

//6
const arr5 = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },

  { cpu: "intel", info: { cores: 4, сache: 4 } },

  { cpu: "amd", info: { cores: 1, сache: 1 } },

  { cpu: "intel", info: { cores: 3, сache: 2 } },

  { cpu: "amd", info: { cores: 4, сache: 2 } },
];

const sortCores = arr5.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(sortCores);

//7
let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },

  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },

  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },

  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];

function intAndSort(arr, minPrice, maxPrice) {
  return arr
    .filter((prod) => prod.price > minPrice && prod.price < maxPrice)
    .sort((prev, next) => prev.price - next.price);
}

console.log(intAndSort(products, 6, 19));
