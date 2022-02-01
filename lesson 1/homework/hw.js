// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let str1 = 'hello';
console.log(str1);
// alert(str1);
document.write(`<div>${str1}</div>`);
let str2 = 'owu';
console.log(str2);
// alert(str2);
document.write(`<div>${str2}</div>`);
let str3 = 'com';
console.log(str3);
// alert(str3);
document.write(`<div>${str3}</div>`);
let str4 = 'ua';
console.log(str4);
// alert(str4);
document.write(`<div>${str4}</div>`);
console.log(str1, str2, str3, str4)
// console.log(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4);
// console.log(`${str1} ${str2} ${str3} ${str4}`)
let n1 = 1;
console.log(n1);
// alert(n1);
document.write(`<div>${n1}</div>`);
let n2 = 10;
console.log(n2);
// alert(n2);
document.write(`<div>${n2}</div>`);
let n3 = -999;
console.log(n3);
// alert(n3);
document.write(`<div>${n3}</div>`);
let n4 = 123;
console.log(n4);
// alert(n4);
document.write(`<div>${n4}</div>`);
let n5 = 3.14;
console.log(n5);
// alert(n5);
document.write(`<div>${n5}</div>`);
let n6 = 2.7;
console.log(n6);
// alert(n6);
document.write(`<div>${n6}</div>`);
let n7 = 16;
console.log(n7);
// alert(n7);
document.write(`<div>${n7}</div>`);
console.log(n1, n2, n3, n4, n5, n6, n7);
let numbers = [n1, n2, n3, n4, n5, n6, n7];
console.log(numbers);
console.log(true);
let tr = 'true';
// alert(tr);
document.write(`<div>${tr}</div>`);
console.log(false);
let fls = 'false';
// alert(fls);
document.write(`<div>${fls}</div>`);
let someinfo = [str1, str2, str3, str4, n1, n2, n3, n4, n5, n6, n7, true, false];
console.log(someinfo);
document.write(`<div>
<h2>${str1} ${str2} ${str3} ${str4}</h2>
<p>${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}, ${n7}.</p>
<h5>${tr} ${fls}</h5>
</div>`);
alert(str1 + '_' + str2 + '.' + str3 + '.' + str4 + '. (' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4 + ', ' + n5 + ', ' + n6 + ', ' + n7 + '). ' + tr + ', ' + fls + '.');

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

str1 = 'today';
console.log(str1);
// alert(str1);
document.write(`<div>${str1}</div>`);
str2 = 'a';
console.log(str2);
// alert(str2);
document.write(`<div>${str2}</div>`);
str3 = 'good';
console.log(str3);
// alert(str3);
document.write(`<div>${str3}</div>`);
str4 = 'day';
console.log(str4);
// alert(str4);
document.write(`<div>${str4}</div>`);
console.log(str1, str2, str3, str4)
n1 = 0;
console.log(n1);
// alert(n1);
document.write(`<div>${n1}</div>`);
n2 = 1;
console.log(n2);
// alert(n2);
document.write(`<div>${n2}</div>`);
n3 = 2;
console.log(n3);
// alert(n3);
document.write(`<div>${n3}</div>`);
n4 = 3;
console.log(n4);
// alert(n4);
document.write(`<div>${n4}</div>`);
n5 = 4;
console.log(n5);
// alert(n5);
document.write(`<div>${n5}</div>`);
n6 = 5;
console.log(n6);
// alert(n6);
document.write(`<div>${n6}</div>`);
n7 = 6;
console.log(n7);
// alert(n7);
document.write(`<div>${n7}</div>`);
console.log(n1, n2, n3, n4, n5, n6, n7);
numbers = [n1, n2, n3, n4, n5, n6, n7];
console.log(numbers);
console.log(true);
tr = 'true2';
// alert(tr);
document.write(`<div>${tr}</div>`);
console.log(false);
fls = 'false2';
// alert(fls);
document.write(`<div>${fls}</div>`);
someinfo = [str1, str2, str3, str4, n1, n2, n3, n4, n5, n6, n7, true, false];
console.log(someinfo);
document.write(`<div>
<h2>${str1} ${str2} ${str3} ${str4}</h2>
<p>${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}, ${n7}.</p>
<h5>${tr} ${fls}</h5>
</div>`);
alert(`${str1} ${str2} ${str3} ${str4}. (${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6},${n7}). ${tr}, ${fls}.`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Анастасія';
let middleName = 'Степанівна';
let lastName = '19';
let person = (`${firstName} ${middleName}. ${lastName}`);
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

firstName = prompt("Ім'я:",firstName);
middleName = prompt("По-батькові:",middleName);
lastName = prompt("Вік:",lastName);
alert('Вітаю, ' + firstName + ' ' + middleName + '! Тобі ' + lastName + ' років.');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

let bool1 = 5 < 6;
console.log(bool1);
let bool2 = 5 > 6;
console.log(bool2);
let bool3 = 5 === 6;
console.log(bool3);
let bool4 = 5 >= 6;
console.log(bool4);
let bool5 = 10 === 10;
console.log(bool5);
let bool6 = 10 <= 10;
console.log(bool6);
let bool7 = 10 !== 10;
console.log(bool7);
let bool8 = 10 < 10;
console.log(bool8);
let bool9 = 10 > 10;
console.log(bool9);
let bool10 = 123 === '123';
console.log(bool10);
let bool11 = 123 !== '123';
console.log(bool11);

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// Оскільки str і а не виведені в консоль, то їх там не відобразить. Проте на сторінці (body) з'являться такі записи (кожне з нового рядка, оскільки вкінці присутній тег <br/>:
// 205   ->   тобто, все перетворилось у рядок і значення просто склались    ->   конкатенація
// 15   ->   щось із ряду "меджик"
// 40   ->   оператор * діє як математичне значення, js змінив 20  і 2 на число, оскільки там лиш присутнє число
// 10   ->   аналогічно, оператор / діє як математичне значення