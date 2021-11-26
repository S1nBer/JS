//1
let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
    if(str[i - 1] === ' ' || i === 0) {
        res += str[i].toUpperCase();
    } else {
        res += str[i];
    }
}

console.log(res);

//2
let str1 = 'tseb eht ma i';
let res1 = '';

for (let i = 1; i <= str1.length; i++) {
    res1 += str1[str1.length - i];
}

console.log(res1);

//3
let x = 5;
let fact = 1;

for (let i = 1; i <= x; i++) {
    fact *= i;
}

console.log(fact);

//4
let str2 = 'JavaScript is a pretty good language';
let res2 = '';

for (let i = 0; i < str2.length; i++) {
    if (str2[i - 1] === ' ') {
        res2 += str2[i].toUpperCase();
    } else if (str2[i] !== ' ') {
        res2 += str2[i];
    }
}

console.log(res2);

//5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
        console.log(arr[i]);
    }
}

//6
let list = {

    name: 'denis',
    
    work: 'easycode',
    
    age: 29
    
}

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}

console.log(list);