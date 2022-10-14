const developer = {
    name: 'Vladimir',
    surname: 'Petrov',
    age: 30,
    skills: ['JavaScript', 'TypeScript', 'CSS'],
    isMarried: false,
    addAge: function () {
        this.age++;
        console.log(this);
    },
    getMarried() {
        this.isMarried = true;
    },
    getDivorced() {
        this.isMarried = false;
    },
};
developer.addAge();
//developer.isMarried = true;
//console.log(developer.isMarried);
//console.log('fullname' in developer);
//for (let prop in developer) {
  //  console.log(prop, developer[prop]);
//}
const numbers = [1, 2, 3, 4, 5];
//for (let number of numbers) {
  //  console.log(number);
//}
console.log(numbers.includes(4));
console.log(numbers.slice(0, 2));
const nums2 = numbers.concat([6, 7, 8]);
console.log(nums2);
console.log(numbers.join(', '));
//errors
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('В функции не переданы числа для сложения');
    }
    return a + b;
}
try {
    sum();
    }
    catch (err) {
    console.error(err.massage)
    }
console.log('End');
// RegExp
const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');


const str = 'JavaScript is cool language. Everybody should learn JavaScript';
console.log(/javascript/i.test(str));
console.log(str.replace(/javascript/gi, 'php'));
console.log(str.match(/javascript/ig));