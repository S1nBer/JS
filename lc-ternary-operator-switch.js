let a = 1;
let b = 0;

/* if (a > 0) {
    b = a;
} else {
    b +=1;
} */

b = a > 0 ? b = a : b + 1;

b = a > 0 ? 2 : a < 0 ? 3 : 0;

/* console.log(b); */
let color = 'yellow';

switch(color) {
    case 'yellow': 
    case 'red':
        console.log('Color is red || yellow');
        break;
    default:
        console.log('Default');
}