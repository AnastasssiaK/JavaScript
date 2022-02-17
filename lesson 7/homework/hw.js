// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this['id'] = id;
    this['name'] = name;
    this['surname'] = surname;
    this['email'] = email;
    this['phone'] = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let user1 = new User(1, 'Anstasiia', 'Kulynych', 'kulynychnastya@gmail.com', '0987764588');
let user2 = new User(2, 'Iryna', 'Korpalo', 'iryna@gmail.com', '0975643123');
let user3 = new User(3, 'Andriana', 'Chepil', 'andriana@gmail.com', '0981267037');
let user4 = new User(4, 'Yuliia', 'Kardashova', 'yuliia@gmail.com', '0967809345');
let user5 = new User(5, 'Yaryna', 'Kireeva', 'yaryna@gmail.com', '0986712097');
let user6 = new User(6, 'Solomiia', 'Chura', 'solomiia@gmail.com', '0956709861');
let user7 = new User(7, 'Vicktoriia', 'Sharmanska', 'vicka@gmail.com', '0987764588');
let user8 = new User(8, 'Vicktoriia', 'Kosyk', 'kotsyk@gmail.com', '0932547890');
let user9 = new User(9, 'Khrystyna', 'Vorobiy', 'khrystya@gmail.com', '096785412');
let user10 = new User(10, 'Kateryna', 'Ilchuk', 'katya@gmail.com', '0976543219');

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((max, min) => max.id - min.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(1, 'Anstasiia', 'Kulynych', 'kulynychnastya@gmail.com', '0987764588',['pen','paper','pencil']),
new Client(2, 'Iryna', 'Korpalo', 'iryna@gmail.com', '0975643123', ['ruler', 'glue']),
new Client(3, 'Andriana', 'Chepil', 'andriana@gmail.com', '0981267037', ['pencil case']),
new Client(4, 'Yuliia', 'Kardashova', 'yuliia@gmail.com', '0967809345', ['book','computer','blackboard','globe','notebook']),
new Client(5, 'Yaryna', 'Kireeva', 'yaryna@gmail.com', '0986712097',['chalk']),
new Client(6, 'Solomiia', 'Chura', 'solomiia@gmail.com', '0956709861',['bag','desk','laptop']),
new Client(7, 'Vicktoriia', 'Sharmanska', 'vicka@gmail.com', '0987764588',['rubber']),
new Client(8, 'Vicktoriia', 'Kosyk', 'kotsyk@gmail.com', '0932547890',['calculator','cutter','chair','lock']),
new Client(9, 'Khrystyna', 'Vorobiy', 'khrystya@gmail.com', '096785412',['marker','pen']),
new Client(10, 'Kateryna', 'Ilchuk', 'katya@gmail.com', '0976543219',['copy-book'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((max, min) => max.order.length - min.order.length));