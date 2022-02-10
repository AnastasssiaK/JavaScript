// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

let rectangleS = (a, b) => a * b;
console.log(`Площа трикутника дорівнює: ${rectangleS(10, 20)}.`);

// - створити функцію яка обчислює та повертає площу кола

const PI = 3.14;
let circleS = (r) => PI * Math.pow(r, 2);
console.log(`Площа кола дорівнює: ${circleS(15)}.`);

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderS = (r, h) => ((2 * PI * r * h) + 2 * PI * Math.pow(r, 2));
console.log(`Площа циліндра дорівнює: ${cylinderS(5, 12)}.`)

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayElementsOut = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

let someArr = [11, 22, 33, 44, 55, 66, 77];
arrayElementsOut(someArr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let textCreator = (text) => {
    document.write(`<p>${text}</p>`)
}
textCreator('Some info.....');

let textCreatorN = (text, n) => {
    for (let i = 0; i < n; i++) {
        document.write(`<p>${text} ${i + 1}</p>`)
    }
}
textCreatorN('Some text...', 10);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulCreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
ulCreator('hello world!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulCreatorAndN = (text, n) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text} ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}
ulCreatorAndN('item', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = (array) => {
    document.write(`<ol>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>element "${array[i]}".</li>`);
    }
    document.write(`</ol>`);

}
someArr = [11, true, 22, 'text', 33, false, 'false', 44, 55, 'okten', 66, 77];
arr(someArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrObj = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}. Name - ${arrayElement.name}. Age: ${arrayElement.age} years old.</div>`);
    }
}
let arrayOfObj = [{id: 1, name: 'Homer', age: 39},{id: 2, name: 'Marge', age: 36}, {id: 3, name: 'Bart', age: 10}, {id: 4, name: 'Lisa', age: 8},{id: 5, name: 'Maggie', age: 1},];
arrObj(arrayOfObj);
