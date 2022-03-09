// є масив
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let h1 = document.createElement('h1');
h1.innerText = 'Users';

let wrap = document.createElement('div');
wrap.classList.add('wrap');

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<h3>${user.name}</h3>
<p>Age: ${user.age} y.o.</p>
<p>Status: ${user.status}.</p>`;

    let button = document.createElement('button');
    button.innerText = 'Додати до улюблених';

    button.onclick = function () {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        favourites.push(user);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    userDiv.appendChild(button);
    wrap.append(userDiv)
}
let btnFavorites = document.createElement('button');
btnFavorites.setAttribute('class', 'btnFavorites');
btnFavorites.innerText = 'Перейти до улюблених';
btnFavorites.onclick = function () {
    location.href = `favorites.html?pd=${JSON.parse(localStorage.getItem('favourites'))}`;
}

document.body.append(h1, wrap, btnFavorites);


