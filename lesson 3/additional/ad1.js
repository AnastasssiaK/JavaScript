// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arrA = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arrA[i] = i;
//     }
// }
// console.log(arrA);

// let arrA = [];
// let numA = 2;
// for (let i = 0; i < 50; i++) {
//     if (numA % 2 === 0) {
//         arrA[i] = numA;
//         numA = numA + 2;
//     }
// }
// console.log(arrA);

let arrA = [];
let numA = 0;
for (let i = 0; i < 50; i ++) {
if (numA % 2 === 0) {
    numA += 2;
    arrA.push(numA);
}
}
console.log(arrA);


//     b. заповнити його 50 непарними числами за допомоги циклу.

let arrB = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arrB[i] = i;
    }
}
console.log(arrB)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrC = [];
for (let i = 0; i < 20; i++) {
    arrC[i] = Math.ceil(Math.random() * 100);
}
console.log(arrC);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrD = [];
for (let i = 0; i < 20; i++) {
    arrD[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
}
console.log(arrD);

// 2. Вивести за допомогою console.log кожен третій елемен

let arrTwo = [];
for (let i = 2; i < arrD.length; i += 3) {
    console.log(arrD[i]);
    arrTwo.push(arrD[i]);
}
console.log(arrTwo);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr = [];
let i = 1
while (i < 101) {
    arr.push(i++);
}
console.log(arr);

let arrNew = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        arrNew.push(arr[i]);
    }
}
console.log(arrNew);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// for (let j = 0; j < arr.length; j++) {
//     if ((arr[j+1]) % 2 === 0) {
//         console.log(arr[j]);
//     }
// }
let arrFive = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let j = 0; j < arrFive.length; j++) {
    if ((arrFive[j + 1]) % 2 === 0) {
        console.log(arrFive[j]);
    }
}

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrSix = [100, 250, 50, 168, 120, 345, 188];
let result = 0;
for (let j = 0; j < arrSix.length; j++) {
    result += arrSix[j];
}
console.log(`Всього разом: ${result}`);
result = result / arrSix.length;
console.log(`Середній чек = ${result.toFixed(2)}`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrSevenOne = [];
let arrSevenTwo = [];
for (let i = 0; i < 10; i++) {
    arrSevenOne[i] = Math.ceil(Math.random() * 100);
    arrSevenOne[i] = arrSevenOne[i] * 5;
    console.log(arrSevenOne[i]);
    arrSevenTwo.push(arrSevenOne[i]);
}
console.log(arrSevenTwo);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrEightOne = [true, false, 1, 2, 'one', 'two', 3, 'three', false, 4];
let arrEightTwo = [];
for (let j = 0; j < arrEightOne.length; j++) {
    if (typeof arrEightOne[j] === 'number') {
        arrEightTwo.push(arrEightOne[j]);
    }
}
console.log(arrEightTwo);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
let usersWithCities = [];
for (let users of usersWithId) {
    for (let cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
            usersWithCities.push(users)
        }
    }
}
console.log(usersWithCities);

//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrTen = [3, 22, 16, 48, 92, 12, 88, 25, 71, 60];
for (let j = 0; j < arrTen.length; j++) {
    if (arrTen[j] % 2 === 0) {
        console.log(arrTen[j]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

arrTen = [3, 22, 16, 48, 92, 12, 88, 25, 71, 60];
let arrEmpty = [];
for (let j = 0; j < arrTen.length; j++) {
    arrEmpty.push(arrTen[j]);
}
console.log(arrEmpty);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let abc = ['a', 'b', 'c'];
let resultAbc = '';
for (let j = 0; j < abc.length; j++) {
    resultAbc += abc[j];
}
console.log(resultAbc);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

abc = ['a', 'b', 'c'];
resultAbc = '';
let k = 0;
while (k < abc.length) {
    resultAbc += abc[k];
    k++;
}
console.log(resultAbc);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

abc = ['a', 'b', 'c'];
resultAbc = '';
for (let abcElement of abc) {
    resultAbc += abcElement;
}
console.log(resultAbc);
