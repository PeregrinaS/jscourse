// Функции vs процедуры
// функция возвращает результат
function sum(a, b) {
    return a + b;
}
const result1 = sum(4, 6);
const result2 = sum(5, 8);

console.log(result1);
// процедура ничего не возвращает
function sum2(a, b) {
    console.log(a+b);
}
//IIFE (Immediately-invoked function expression)
(function (a, b) {
    return a + b;
}) ()
// scope (область видимости)
let isValid = false;
const str = 'Hello';

function isString(str) {
    const isValid = typeof str === "string";
    return isValid;
}
 const res = isString('123');
// Higher order function
// Callback function
function copyArrayAndSquareNums(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i]*arr[i]);
    }
    return output;
}

function copyArrayAndDivideByTwo(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i]/2);
    }
    return output;
}
// Recursion
//Функция вызывает саму себя
function recurse () {
    return recurse();
}
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(3));
// Принимает символ и возвращает этот символ в пяти экземплярах
let counter = 0; // счетчик
function repeater(char) {
    counter++;
    if (counter === 5) {
        counter =0;
        return char;
    }
    return char + repeater(char);
}
console.log(repeater('x'));
console.log(repeater('a2'));
//Замыкание closure
//1. Функции , которые возвращаются из других функций
//2. Возвращаемая функция запоминат scope
function hello(name) {
    const helloName = () => console.log('hello', name);
    return helloName;
}

const hn = (name) => console.log('hello', name);

const helloWorld = hello('world');
helloWorld();
const helloJohn = hello('John');
helloJohn();
hn('bob');

function outer() {
    let count = 0;
    function incrementCounter(){
        console.log(++count);
    }
    return incrementCounter;
}
//создаем независимые счетчики
const myCounter1 = outer();
myCounter1();
myCounter1();
myCounter1();
//THIS
const cat = {
    name: 'Murka',
    say() {
       // const greeting = () => console.log(this.name);
        function greeting() {console.log(this.name)};
        setTimeout(greeting, 1000)
    },
  }