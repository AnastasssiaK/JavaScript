// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content').innerText);

// -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules').innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший

document.getElementById('content').innerHTML = 'Hello world!';

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerHTML = '<i>Today is Saturday.</i>';

// -- змініть кожному елементу колір фону на червоний

for (const child of document.body.children) {
child.style.background = 'pink';
child.style.border = '2px solid black';
child.style.boxSizing = 'border-box';
child.style.padding = '40px'
}

// -- змініть кожному елементу колір тексту на синій

let blueTxtChild = document.body.children;
for (const child of blueTxtChild) {
    child.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.querySelectorAll('#rules'));

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const element of document.getElementsByClassName('fc_rules')) {
    element.style.color = 'red';
}