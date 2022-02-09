// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleS(a, b) {
    return a * b;
}

let resultRectangle = rectangleS(10, 20);
console.log(`Площа прямокутника = ${resultRectangle}.`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14

function circleS(r) {
    return PI * Math.pow(r, 2);
}

let resultCircle = circleS(8);
console.log(`Площа круга = ${resultCircle}.`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderS(h, r) {
    return 2 * PI * r * (h + r);
}

let resultCylinder = cylinderS(15, 5);
console.log(`Площа циліндра = ${resultCylinder}.`);

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function iteratorOfArray(array) {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

iteratorOfArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textCreator(text, n) {
    for (let i = 0; i < n; i++) {
        document.write(`<p>${text}</p>`)
    }
}

textCreator('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 3);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreator (text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

ulCreator('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulCreatorAndN (text, n) {
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ulCreatorAndN('Only three "li".',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listBuild () {
    for (const argument of arguments) {
        console.log(argument);
    }
}
listBuild('one', true, 'two', false, 1, 2);

let someArr = ['one', true, 'two', false, 1, 2];
function arrList (arr) {
    document.write('<ol>')
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ol>')
}
arrList(someArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let simpsonsArray = [{id: 1, name: 'Homer', age: 39},{id: 2, name: 'Marge', age: 36}, {id: 3, name: 'Bart', age: 10}, {id: 4, name: 'Lisa', age: 8},{id: 5, name: 'Maggie', age: 1},];
function objectCreator (array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}. Name - ${arrayElement.name}. Age: ${arrayElement.age} years old.</div>`);
    }
}
objectCreator(simpsonsArray);