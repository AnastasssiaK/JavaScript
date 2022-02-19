// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main_header').classList.add('name_of_group')
// console.log(document.body.getElementsByClassName('name_of_group'));

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListClass = document.getElementsByClassName('linkList');
for (const element of linkListClass) {
    element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let linkElement2Class = document.getElementsByClassName('listElement2');
for (const element of linkElement2Class) {
    console.log(element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.background = 'silver';
}
    console.log(liElements);

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElements = document.getElementsByTagName('a');
for (const a of aElements) {
    a.classList.add('anchor');
}
console.log(aElements);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

//let aElements = document.getElementsByTagName('a');
for (const a of aElements) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

//let aElements = document.getElementsByTagName('a');
for (const a of aElements) {
    let XXX = a.innerText;
    a.classList.add(`element_${XXX}`);
}
console.log(aElements);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeaderAll = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaderAll) {
    let bgColor = prompt(`Введи колір фону для елементу <a> (англійською).`)
    subHeader.style.background =   `${bgColor}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

//let subHeaderAll = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaderAll) {
    if (subHeader.innerText === 'content 2 segment') {
    let txtColor = prompt(`Введи колір фону для елементу <a> (f.e.: pink, blue, red, purple...).`)
        subHeader.style.color =  `${txtColor}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

document.getElementsByClassName('content_1').innerText = `${prompt('Write some text for .content_1')}`;

// l) отримати елементи p та змінити їм padding на 20px
 let pAll = document.getElementsByTagName('p');
for (const p of pAll) {
    p.style.padding = '20px';
}
console.log(pAll);

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2Class = document.getElementsByClassName('text2');
for (const element of text2Class) {
    element.innerText = 'dec-2021';
}