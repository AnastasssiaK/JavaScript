// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//**************************************************************************

class Obj {
    constructor(id, name, username, email, address,street, suite, city, zipcode, geo,lat, lng, phone, website, company, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        };
    }
}

console.log(new Obj(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
        'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
        '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org',
        'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));


//**************************************************************************

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//**************************************************************************

function Constructor(titleOfTag, action, attrs) {
    this.titleofTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

function Attrs(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

let a = new Constructor('a', 'Тег <a> є одним з найважливіших елементів HTML і призначений для створення посилань. Залежно від наявності атрибутів name або href тег <a> встановлює посилання або якір. Якорем називається закладка всередині сторінки, яку можна вказати як ціль посилання. Під час використання посилання, яке вказує на якір, відбувається перехід до закладки всередині веб-сторінки.',
    [new Attrs('accesskey', 'Активація посилання за допомогою комбінації клавіш.'),
        new Attrs('coords', 'Встановлює координати активної зони.'),
        new Attrs('downoald', 'Пропонує завантажити вказаний за посиланням файл.'),
        new Attrs('href', 'Вказує адресу документа, на яку слід перейти.')]);

console.log(a);

let div = new Constructor('div', 'Елемент <div> є блоковим елементом і призначений виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку керується за допомогою стилів. Щоб не описувати кожного разу стиль усередині тега, можна виділити стиль у зовнішню таблицю стилів, а для тега додати атрибут class або id із ім\'ям селектора.',
    [new Attrs('align', 'Визначає вирівнювання вмісту тега <div>.'),
        new Attrs('title', 'Додає спливаючу підказку до вмісту.')]);

console.log(div);

let h1 = new Constructor('h1', 'HTML пропонує шість заголовків різного рівня, які показують відносну важливість розділу, розташованого після заголовка. Так, тег <h1> є найбільш важливим заголовком першого рівня, а тег <h6> служить для позначення заголовка шостого рівня і є найменш значним. За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного зображення, заголовки наступного рівня за розміром менше. Теги <h1> ,..., <h6> відносяться до блокових елементів, вони завжди починаються з нового рядка, а після них інші елементи відображаються на наступному рядку. Крім того, перед заголовком та після нього додається порожній простір.',
    [new Attrs('align', 'Визначає вирівнювання заголовка.')]);

console.log(h1);

let span = new Constructor('span', 'Тег <span> призначений для визначення малих елементів документа. На відміну від блокових елементів, таких як <table> , <p> або <div> , за допомогою тега <span> можна виділити частину інформації всередині інших тегів та встановити для неї свій стиль. Наприклад, всередині абзацу (тега <p> ) можна змінити колір і розмір першої літери, якщо додати початковий і кінцевий тег <span> і визначити стиль тексту. Щоб не описувати кожного разу стиль усередині тега, можна виділити стиль у зовнішню таблицю стилів, а для тега додати атрибут class або id із ім\'ям селектора.',
    'Для цього тега доступні універсальні атрибути та події .')

console.log(span);

let input = new Constructor('input', 'Тег <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу та забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів та прапорців.',
    [new Attrs('accept', 'Встановлює фільтр на типи файлів, які можна надіслати через поле завантаження файлів.'),
        new Attrs('accesskey', 'Перехід до елемента за допомогою комбінації клавіш.'),
        new Attrs('align', 'Визначає вирівнювання зображення.'),
        new Attrs('alt', 'Альтернативний текст для кнопки із зображенням.'),
        new Attrs('autocomplete', 'Вмикає або вимикає автозаповнення.'),
        new Attrs('autofocus', 'Встановлює фокус у полі форми.'),
        new Attrs('border', 'Товщина кадру навколо зображення.'),
        new Attrs('checked', 'Попередньо активований перемикач або прапорець.'),
        new Attrs('form', 'Зв\'язує поле з формою щодо її ідентифікатора.')]);

console.log(input);

let form = new Constructor('form', 'Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем та сервером. Область застосування форм не обмежена надсиланням даних на сервер, за допомогою клієнтських скриптів можна отримати доступ до будь-якого елементу форми, змінювати його та застосовувати на свій розсуд.',
    [new Attrs('accept-charset', 'Встановлює кодування, в якому сервер може приймати та обробляти дані.'),
    new Attrs('action','Адресу програми або документа, який обробляє дані форми.'),
    new Attrs('enctype','Спосіб кодування даних форми.'),
    new Attrs('method','Метод протоколу HTTP.'),
    new Attrs('name','Назва форми.'),
    new Attrs('target','Ім\'я вікна або кадру, куди обробник завантажуватиме результат, що повертається.'),
    new Attrs('autocomplete','Включає автозаповнення полів форми.'),]);

console.log(form);

let option = new Constructor('option', 'Тег <option> визначає окремі пункти списку, який створюється за допомогою контейнера <select> . Ширина списку визначається найширшим текстом, вказаним у тегу <option> , а також може змінюватися за допомогою стилів. Якщо планується надсилати дані списку на сервер, потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
    [new Attrs('disabled', 'Заблокувати елемент списку для доступу.'),
    new Attrs('label','Вказує позначку пункту списку.'),
    new Attrs('selected','Наперед встановлює певний пункт списку виділеним.'),
    new Attrs('value','Значення пункту списку, яке буде надіслано на сервер або прочитано за допомогою скриптів.')]);

console.log(option);

let select = new Constructor('select', 'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором, як показано далі. Кінцевий вигляд залежить від використання атрибута size тега <select> , який встановлює висоту списку. Ширина списку визначається найширшим текстом, вказаним у тегу <option> , а також може змінюватися за допомогою стилів. Кожен пункт створюється за допомогою тега <option> , який має бути вкладений у контейнер <select> . Якщо планується надсилати дані списку на сервер, потрібно помістити елемент <select>внутрішньо форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
    [new Attrs('accesskey', 'Дозволяє перейти до списку за допомогою певних клавіш.'),
        new Attrs('autofocus','Встановлює, що список отримує фокус після завантаження сторінки.'),
        new Attrs('disabled','Блокує доступ та зміну елемента.'),
        new Attrs('form','Зв\'язує список із формою.'),
        new Attrs('multiple','Дозволяє одночасно вибирати одразу кілька елементів списку.'),
        new Attrs('required','Список обов\'язковий для вибору перед надсиланням форми.'),
        new Attrs('size','Кількість рядків списку, що відображаються.'),
        new Attrs('tabindex','Визначає послідовність переходу між елементами при натисканні клавіші Tab.')]);

console.log(select);

