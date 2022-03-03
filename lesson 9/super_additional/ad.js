let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newUsers = [];
// for (const user of users) {
//     newUsers.push(user.address);
// }
// console.log(newUsers);

//----------------------------------------------------------------------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     let block = document.createElement('div');
//     block.innerHTML = `Name: ${user.name}<br>Age: ${user.age}<br>Status: ${user.status}<br><br>Adress:
// <br>City: ${user.address.city}</br>Country: ${user.address.country}<br>Street: ${user.address.street}<br>House number: ${user.address.houseNumber}`;
//     document.body.appendChild(block);
//
//     block.style.border = '1px solid black';
//     block.style.padding = '20px';
//     block.style.marginBottom = '10px';
// }

//----------------------------------------------------------------------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let block = document.createElement('div');
//     let name = document.createElement('div');
//     name.innerText = `Name: ${user.name}`;
//     let age = document.createElement('div');
//     age.innerText = `Age: ${user.age} y. o.`;
//     let status = document.createElement('div');
//     status.innerText = `Status: ${user.status}`;
//     let address = document.createElement('div');
//     address.innerHTML = `Adress:<br>City: ${user.address.city}</br>Country: ${user.address.country}<br>Street: ${user.address.street}<br>House number: ${user.address.houseNumber}`;
//
//     block.append(name, age, status, address);
//     document.body.appendChild(block);
//     address.style.marginLeft = '20px';
//     block.style.border = '1px solid black';
//     block.style.padding = '20px';
//     block.style.marginBottom = '10px';
// }

//----------------------------------------------------------------------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//     for (const user of users) {
//     let block = document.createElement('div');
//     let name = document.createElement('div');
//     let normName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
//     name.innerHTML = `<h3>${normName}</h3>`;
//     let age = document.createElement('div');
//     age.innerText = `Age: ${user.age} y. o.`;
//     let status = document.createElement('div');
//     status.innerText = `Status: ${user.status}`;
//     let address = document.createElement('div');
//     address.innerHTML = `<ul>Address:
// <li>City: ${user.address.city}</li>
// <li>Country: ${user.address.country}</li>
// <li>Street: ${user.address.street}</li>
// <li>House number: ${user.address.houseNumber}</li>
// </ul>`
//
//     block.append(name, age, status, address);
//     document.body.appendChild(block);
//
//     block.style.border = '1px solid black';
//     block.style.padding = '20px';
//     block.style.marginBottom = '10px';
//     name.style.textAlign = 'center'
// }

//----------------------------------------------------------------------------------------------------------------------


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let content = document.createElement('div');
content.setAttribute('id', 'content');
let h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';
let wrap = document.createElement('div');
wrap.setAttribute('id', 'wrap');

for (const rule of rules) {
    let ruleNum = document.createElement('div');
    ruleNum.setAttribute('class', 'rules rule');
    // for (let i = 1; i < rules.length; i++) {
    //     ruleNum.classList += i;
    // }
    // ????? як поставити кожному окремий індекс
    let h2 = document.createElement('h2');
    h2.innerText = `${rule.title}`;
    let p = document.createElement('p');
    p.innerText = `${rule.body}`;

    document.body.append(content, h1, wrap);
    wrap.appendChild(ruleNum);
    ruleNum.append(h2, p);
}


