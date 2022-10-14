//var prompt = require("prompt");
//prompt.start();
// Типы данных в JavaScript
undefined;
null;
// boolean
true;
false;
// String - строка
'Hello world!';
"Hi there";
`Hello again`;

// Number - число
18;
3.14;
NaN;

// Object - объектный тип
// объект
// массив
// функции
// ошибка
console.log('Hello from aap.js');
// console.log(1000*5+99-6);
const x = 1000 * 5 + 99 - 6;
console.log(x);
const y = x + 100;
console.log(x, y);

const isAdult = true; // camelCase
const firstName = 'John';
const lastName = 'Doe';
//let age = 33;
//age = 34;

// Математические операторы
// - , +, *, /, %, ** - бинарные операторы,т.е. операции с двумя числами
// - унарные операторы - применяются к одному числу
// -, +
-1;
-0;
+0;
0;
+"2"; // 2
+"2 sad"; // NaN
// Конкатенация +
"Hello " + "world"; // "Hello world"
2 + "2"; // "22"
// Инкремент, декремент
// ++, --
// a++ === (a = a+1)
// ++a === (a = a+1)
let a = 1;
console.log(a++); // 1
console.log(++a); // 1
let age = 10;
if (age >= 18) {
    console.log('Access granted')
} else {
    console.log('Access denied')
}
let salary = 2501;
// if (salary > 1500) console.log('I need to improve!')
if (salary > 3000) {
    console.log('It\'s time to relax');
} else if (salary > 2500) {
    console.log('Well, good enough. But I can be better.');
} else if (salary >= 2000) {
    console.log('I need to improve');
} else {
    console.log('Not enough!');
}
console.log('End.')

// Оператор switch
let status = 'idle';
switch (status) {
    case 'idle': {
        console.log('Nothing is happening');
        break;
    }
    case 'loading':
        console.log('Data is loading');
        break;
    case 'respond':
        console.log('We have data');
        break;
    case 'error':
        console.log('Something went wrong');
        break;
    default:
        console.log('Error');
}

// Тернарный оператор
const ag = 18;
//ag >=18 ? console.log('Access granted'): console.log('Access denied');
console.log('Access ', ag >= 18 ? 'granted' : 'denied');

//let isAdult = ag >= 18 ? true: false;
//let statusNumber = status === 'idle' ? 0: 1;
//console.log({statusNumber});

const numbers = [12, 27, 36, 45, 59];
console.log(numbers[0]);
numbers[0] = 18;
console.log(numbers[0]);
console.log(numbers[numbers.length]);
console.log(numbers[numbers.length - 1]);
const strs = ['abc', 'cde'];
strs[2] = 'da';
//strs[12] = 'ru';
strs.push('new item');
console.log(strs);
strs.push('new item 2');
console.log(strs);

console.log(strs.pop());
console.log(strs);
//let index = 0;
//while (index < numbers.length) {
//numbers[index]*=2;
//console.log(numbers[index]);
//index = index + 1;
//}
//console.log('Hello after while');
/*for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
    console.log(numbers[i]);
}
console.log('end for loop');

let tries = 0;
while (tries < 3) {
    const year = +prompt.prompt('Сколько Вам лет?');
    if (year) {
        alert('Welcome');
        break;
    }
    tries++;
    alert('Данные введены не корректно');
}
alert('End');*/

for (let n = 1; n < 10; n++) {
    if (n % 2 === 0) {
    }

    console.log(n);

    // continue;
}
console.log('end');
function sum (a, b) {
    return + a + b;
}
const z = sum(1, 5);
function getNumberData(question) {
    while (true) {
    const res = +prompt(question);
    if (res ===0 || res) {
        return res;
    }
    }
}
const A = getNumberData('Сколько тебе лет?');
console.log(A);