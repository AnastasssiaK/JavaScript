// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

document.write(`<h3>Завдання 1</h3>`);

function minNum(a, b, c) {
    if (a < b && a < c) {
        console.log('Найменше число: ' + a + '.');
        document.write(`<div>Найменше число: ${a}.</div>`);
    } else if (b < a && b < c) {
        console.log('Найменше число: ' + b + '.');
        document.write(`<div>Найменше число: ${b}.</div>`);
    } else if (c < a && c < b) {
        console.log('Найменше число: ' + c + '.');
        document.write(`<div>Найменше число: ${c}.</div>`);
    } else {
        console.log('Ти не ввів числа!');
        document.write(`<div>Ти не ввів числа!</div>`);
    }
}

minNum(10, 5, 7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

document.write(`<h3>Завдання 2</h3>`);

function maxNum(a, b, c) {
    if (a > b && a > c) {
        console.log('Найбільше число: ' + a + '.');
        document.write(`<div>Найбільше число: ${a}.</div>`);
    } else if (b > a && b > c) {
        console.log('Найбільше число: ' + b + '.');
        document.write(`<div>Найбільше число: ${b}.</div>`);
    } else if (c > a && c > b) {
        console.log('Найбільше число: ' + c + '.');
        document.write(`<div>Найбільше число: ${c}.</div>`);
    } else {
        console.log('Ти не ввів числа!');
        document.write(`<div>Ти не ввів числа!</div>`);
    }
}

maxNum(2, 20, 22);

// - створити функцію яка повертає найбільше число з масиву

document.write(`<h3>Завдання 3</h3>`);

let emptyArray = [];

function numArray(n) {
    for (let i = 0; i < n; i++) {
        emptyArray[i] = Math.floor(Math.random() * 1000);
    }
    return emptyArray;
}

let someArray = numArray(10);
console.log(someArray);

function maxNumber(array) {
    let maxNum = [0];
    for (const arrayElement of array) {
        if (arrayElement > maxNum) {
            maxNum = arrayElement
        }
    }
    return maxNum;
}

console.log(`Найбільше число в масиві: ${maxNumber(someArray)}.`);
document.write(`<div>Найбільше число в масиві: ${maxNumber(someArray)}.</div>`);

// - створити функцію яка повертає найменьше число з масиву

document.write(`<h3>Завдання 4</h3>`);

function minNumber(array) {
    let minNum = array[0];
    for (const arrayElement of array) {
        if (arrayElement < minNum) {
            minNum = arrayElement
        }
    }
    return minNum;
}

console.log(`Найбільше число в масиві: ${minNumber(someArray)}.`);
document.write(`<div>Найбільше число в масиві: ${minNumber(someArray)}.</div>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

document.write(`<h3>Завдання 5</h3>`);


function sumArray(array) {
    let result = 0;
    for (const arrayElement of array) {
        result = result + arrayElement;
    }
    return result;
}

console.log(`Сума чисел в масиві = ${sumArray(someArray)}.`);
document.write(`<div>Сума чисел в масиві = ${sumArray(someArray)}.</div>`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

document.write(`<h3>Завдання 6</h3>`);

function averageArray(array) {
    let result = 0;
    for (const arrayElement of array) {
        result = result + arrayElement;
    }
    result = result / array.length;
    return result;
}

console.log(`Середнє арифметичне в масиві = ${averageArray(someArray)}.`);
document.write(`<div>Середнє арифметичне в масиві = ${averageArray(someArray)}.</div>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

document.write(`<h3>Завдання 7</h3>`);

function minReturnMaxShow(numbers) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
    } else if (element < min) {
            min = element;
        }
    }
    console.log(`Найбільше число: ${max}.`);
    console.log(`Найменше число: ${min}.`);
    document.write(`<div>Найбільше число: ${max}.</div>`);
    return min;
}
document.write(`Найменше число: ${minReturnMaxShow(5, 37, 100, 12, 45, 78)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

document.write(`<h3>Завдання 8</h3>`);

let newArray = [];

function arrayOfNumber (n) {
    for (let i = 0; i < n; i++) {
        newArray[i] = Math.floor(Math.random() * 100);
        //newArray.push(Math.floor(Math.random() * 100));
    }
    return newArray;
}

let array = arrayOfNumber(10);
console.log(array);
document.write(`<div>Масив з рандомними числами: [${array}]</div>`);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

document.write(`<h3>Завдання 9</h3>`);

let arrayNew = [];
function getRandomArr (n, min, max) {
    for (let i = 0; i < n; i++) {
        arrayNew[i] = Math.floor(Math.random() * (max -min + 1) + min ); //include max
    }
    return arrayNew;
}
console.log(getRandomArr(20,0,100));
document.write(`<div>Масив з рандомними числами і з максимальним значенням(100): [${arrayNew}]</div>`);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

document.write(`<h3>Завдання 10</h3>`);

let arrBack = [];
function arrayBack (array) {
    for (let i = array.length - 1; i >= 0; i--) {
        arrBack.push(array[i]);
    }
    return arrBack;
}
let arrBackNew = arrayBack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(arrBackNew);
document.write(`<div>Зворотній масив: [${arrBackNew}]</div>`);