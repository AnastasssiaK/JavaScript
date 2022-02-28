// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let txt = document.getElementById('text');
let btn1 = document.getElementById('noneTxt')
btn1.onclick = function () {
    txt.style.display = (txt.style.display === 'none') ? 'block' : 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementById('noneBtn');
btn2.onclick = function () {
    btn2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('btnAge').onclick = function () {
    let age = document.getElementById('age').value;
    if (age < 18) {
        alert('Тобі немає 18 років.');
    } else if (age >= 18 && age <= 120) {
        alert('Можеш проходити далі.')
    } else if (age === '') {
        alert('Ти нічого не ввів.')
    } else {
        alert('Ти не правильно ввів дані.');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuEl = document.querySelector('.menu');
let title = menuEl.querySelector('.title');

title.onclick = function () {
    menuEl.classList.toggle('hidden');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let list = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'hello', body: 'world'},
    {title: 'head', body: 'body'},
    {title: 'name', body: 'surname'}
]
let wrap = document.createElement('div');

for (const element of list) {
    let block = document.createElement('div');
    let title = document.createElement('h4');
    title.innerText = `${element.title}`;
    let body = document.createElement('p');
    body.innerText = `${element.body}`;
    let btn = document.createElement('button');
    btn.innerText  = 'Згорнути "body"';
    btn.onclick = function () {
        body.style.display = 'none';
    }
    block.append(title, body, btn);
    wrap.appendChild(block);
}
document.body.appendChild(wrap);

