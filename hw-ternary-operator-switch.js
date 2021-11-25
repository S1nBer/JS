//1
let a = 'block';

switch(a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
    
}

//2
let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';

//3
let c = 0;

c = c === 0 ? 1 : c < 0 ? 'less then zero' : c*=10;