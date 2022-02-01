// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let n1 = Math.floor(Math.random() * 100);
let n2 = Math.floor(Math.random() * 100);
let n3 = Math.floor(Math.random() * 100);
let n4 = Math.floor(Math.random() * 100);
let n5 = Math.floor(Math.random() * 100);
let n6 = Math.floor(Math.random() * 100);
let n7 = Math.floor(Math.random() * 100);
let n8 = Math.floor(Math.random() * 100);
let n9 = Math.floor(Math.random() * 100);
let n10 = Math.floor(Math.random() * 100);
let numbers = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
console.log(numbers);
let result = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10)
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    Title: "Harry Potter and the Philospher's Stone",
    Pages: 223,
    Genre: 'fantasy',
}
console.log(book1);
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    Title: "Harry Potter and the Chamber of Secrets",
    Pages: 251,
    Genre: 'fantasy',
    Authors: 'J. K. Rowling',
}
console.log(book2);

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [
    {
        Title: "Harry Potter and the Philospher's Stone",
        Pages: 223,
        Genre: 'fantasy',
        Authors: 'J. K. Rowling'
    },
    {
        Title: "Harry Potter and the Chamber of Secrets",
        Pages: 251,
        Genre: 'fantasy',
        Authors: 'J. K. Rowling'
    }
]
console.log(book[0]);
console.log(book[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let S = (height * width);
console.log("Площа прямокутника = " + S + ' см.')

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let r = (dC / 2);
const PI = 3.14;
let v = (PI * r ** 2 * heightC);
console.log("Площа циліндра = " + v.toFixed(1) + ' м.');

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(3,2) + Math.pow(4,2));
console.log("Гіпотенуза = " + k + '.');
