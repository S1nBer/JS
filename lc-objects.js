const user = {
    firstName: 'Andrei',
    age: 22,
    isAdmin: true,
    email: 'test@bk.ru',
    'user-address': {
        city: 'Novosibirsk'
    },
    skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = ['Andrey'];

value = user.firstName;

user.info = 'Some info';

value = user.info;

user['user-address'].city = 'Moscow';
user['user-address'].country = 'Russia';

console.log(user.plan);
user.plan = {};
user.plan.basic = 'basic';

console.log(user);
console.log(value);