// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// normalizeName = (name) => name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__',' ');
// console.log(normalizeName(n1));
// console.log(normalizeName(n2));
// console.log(normalizeName(n3));

let normalizeName = (name, symbol) => {
    let newArray = [];
    if (name.includes(symbol)) {
        let split = name.split(symbol)
        split.forEach((item) => {
            if (item) newArray.push(item);
        })
        console.log(newArray.join(' '));
    }
}
normalizeName(n1, '.');
normalizeName(n2, '-');
normalizeName(n3, '_');

// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNum = [];
let generator = (length, min, max) => {
    for (let i = 0; i < length; i++) {
        randomNum.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return randomNum;
}
console.log(generator(10, 0, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(randomNum.sort((current, next) => current - next));
console.log(randomNum.sort((current, next) => next - current));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let evenNumFilter = (length, min, max) => {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return newArr.filter(number => number % 2 === 0);
}
console.log(evenNumFilter(10, 2, 50));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(randomNum.map(number => number.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (array, direction) => {
        if (direction === 'acsending') {
            array.sort((current, next) => current - next);
        return array;
        }
        if (direction === 'descending') {
            array.sort((current, next) => next - current);
            return array;
        }
}
let nums = [11, 21, 3];
console.log(sortNums(nums,'acsending'));
console.log(sortNums(nums,'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((current, next) => next.monthDuration - current.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration >= 5));