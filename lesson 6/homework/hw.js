// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let stringHello = 'hello world';
let stringLorem = 'lorem ipsum';
let stringJsCool = 'javascript is cool';

console.log(`Довжина першого стрінгового значення: ${stringHello.length} символів.`);
console.log(`Довжина другого стрінгового значення: ${stringLorem.length} символів.`);
console.log(`Довжина третього стрінгового значення: ${stringJsCool.length} символів.`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let sHelloUC = stringHello.toUpperCase();
console.log(sHelloUC);
let sLoremUC = stringLorem.toUpperCase();
console.log(sLoremUC);
let sJsCoolUC = stringJsCool.toUpperCase();
console.log(sJsCoolUC);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(sHelloUC.toLowerCase());
console.log(sLoremUC.toLowerCase());
console.log(sJsCoolUC.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   ';
console.log(`Чиста стрінга: "${dirtyStr.trim()}".`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (string) => string.split(' ');

let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
document.writeln(`<div>${arr}</div>`);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

delete_characters = (string, length) => string.substring(0,length);

// let str = 'Каждый охотник желает знать';
console.log(delete_characters(str, 7))
document.writeln(`<div>${delete_characters(str, 7)}</div>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

insert_dash = (string) => string.toUpperCase().replaceAll(' ', '-');

str = "HTML JavaScript PHP";
console.log(insert_dash(str))
document.writeln(`<div>${insert_dash(str)}</div>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

normalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

console.log(normalizeString(stringHello));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

capitalize = (str) => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
str = 'Каждый охотник желает знать';
console.log(capitalize(str));
