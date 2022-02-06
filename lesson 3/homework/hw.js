// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNumFive = [1, 2, 3, 4, 5];
console.log(arrNumFive);
let arrStrFive = ['one', 'two', 'three', 'four', 'five',];
console.log(arrStrFive);
let arrAllFive = ['okten', 'school', 1, true, false];
console.log(arrAllFive);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrEmpty = [];
arrEmpty[0] = 'Hello!';
arrEmpty[1] = 'My name is Anastasia.';
arrEmpty[2] = 'Good day)';
arrEmpty[3] = '06.02.2022';
arrEmpty[4] = true;
console.log(arrEmpty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>item</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>item ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>title</h1>`)
    i++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j < 20) {
    document.write(`<h1>title ${j}</h1>`);
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrNumTen = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let number of arrNumTen) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrStrTen = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit.', 'Facilis,', 'non.'];
// console.log(arrStrTen.length)
for (let string of arrStrTen) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrAllTen = ['one', 'two', 'three', 'four', 1, 2, 3, 4, true, false];
for (let arrAllTenElement of arrAllTen) {
    console.log(arrAllTenElement);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let onlyBoolean = ['one', 'two', 'three', 'four', 1, 2, 3, 4, true, false];
for (let i = 0; i < onlyBoolean.length; i++) {
    if (typeof onlyBoolean[i] === 'boolean') {
        console.log(onlyBoolean[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let onlyNum = ['one', 'two', 'three', 'four', 1, 2, 3, 4, true, false];
for (let i = 0; i < onlyNum.length; i++) {
    if (typeof onlyNum[i] === 'number') {
        console.log(onlyNum[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let onlyStr = ['one', 'two', 'three', 'four', 1, 2, 3, 4, true, false];
for (let i = 0; i < onlyStr.length; i++) {
    if (typeof onlyStr[i] === 'string') {
        console.log(onlyStr[i]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrayOne = [];
arrayOne[0] = 32;
arrayOne[1] = 15;
arrayOne[2] = true;
arrayOne[3] = 'night';
arrayOne[4] = 'day';
arrayOne[5] = false;
arrayOne[6] = 'instagram';
arrayOne[7] = 1000;
arrayOne[8] = 'moon';
arrayOne[9] = 7;
for (let k = 0; k < arrayOne.length; k++) {
    console.log(arrayOne[k]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k < 10; k++) {
 console.log ('Поточний цикл = ' + k);
 document.write('Поточний цикл = ' + k + '</br>')
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k < 100; k++) {
    console.log ('Поточний цикл = ' + k);
    document.write('Поточний цикл = ' + k + '</br>')
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k < 100; k = k + 2) {
    console.log ('Поточний цикл = ' + k);
    document.write('Поточний цикл = ' + k + '</br>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let k = 0; k < 100; k++) {
    if (k % 2 === 0) {
        console.log('Парні кроки: ' + k);
        document.write('Парні кроки: ' + k);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let k = 0; k < 100; k++) {
    if (k % 2 !== 0) {
        console.log('Непарні кроки: ' + k);
        document.write('Непарні кроки: ' + k);
    }
}