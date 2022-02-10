// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNum = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(`Найменше число перше, тобто "${num1}".`);
    } else if (num2 < num1 && num2 < num3) {
        console.log(`Найменше число друге, тобто "${num2}".`);
    } else if (num3 < num1 && num3 < num2) {
        console.log(`Найменше число третє, тобто "${num3}".`);
    } else {
        console.log(`Ти не дотримався вказівок.`)
    }
}
minNum(70, 12, 30);
// minNum(+prompt('Введи перше число:'),+prompt('Введи друге число:'), +prompt('Введи третє число:'));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNum = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(`Найбільше число перше, тобто "${num1}".`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`Найбільше число друге, тобто "${num2}".`);
    } else if (num3 > num1 && num3 > num2) {
        console.log(`Найбільше число третє, тобто "${num3}".`);
    } else {
        console.log(`Ти не дотримався вказівок.`)
    }
}
maxNum(70, 12, 30);
// maxNum(+prompt('Введи перше число:'),+prompt('Введи друге число:'), +prompt('Введи третє число:'));

// - створити функцію яка повертає найбільше число з масиву

let maxOfArr = (array) => {
    let maxNum = array[0];
    for (const arrayElement of array) {
        if (arrayElement > maxNum) {
            maxNum = arrayElement;
        }
    }
    return maxNum;
}
let numArr = [10, 33, 12, 8, 176, 220, 1, 60];
console.log(`Найбільше число в масиві: ${maxOfArr(numArr)}.`);

// - створити функцію яка повертає найменьше число з масиву

let minOfArr = (array) => {
    let minNum = array[0];
    for (const arrayElement of array) {
        if (arrayElement < minNum) {
            minNum = arrayElement;
        }
    }
    return minNum;
}
console.log(`Найменше число в масиві: ${minOfArr(numArr)}.`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArr = (array) => {
    let sumNum = 0;
    for (const arrayElement of array) {
        sumNum += arrayElement;
    }
    return sumNum;
}
console.log(`Сума чисел в масиві = ${sumOfArr(numArr)}.`);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageOfArr = (array) => {
    let sumNum = 0;
    for (let i = 0; i < array.length; i++) {
        sumNum += array[i];
    }
    return sumNum / array.length;
}
console.log(`Середнє арифметичне масиву = ${averageOfArr(numArr)}.`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (array) => {
    let min = array[0];
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
    }
    console.log(`Найбільше число "${max}".`);
    return min;
}
console.log(`Найменше число "${minMax(numArr)}".`);

// - створити функцію яка заповнює масив рандомними числами

let someArr = (length) => {
let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.floor(Math.random()*100));
    }
    return emptyArr;
}
console.log(`Масив з рандомними числами (до 100): [${someArr(10)}]`)


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arr = (length, limit) => {
   let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random()*limit));
    }
    return emptyArray;
}
console.log(`Масив з рандомними числами (до 100): [${arr(20,100)}]`)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// numArr = [10, 33, 12, 8, 176, 220, 1, 60];
let reverseArr = (array) => {
    let arrReverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrReverse.push(array[i]);
    }
    return arrReverse;
    }
console.log(`Зворотній масив: [${reverseArr(numArr)}].`)


