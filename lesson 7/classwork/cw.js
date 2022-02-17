// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxSpeed} км на годину.`);
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}.`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed +=  newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car1 = new Cars('Audi', 'Germany', 2021, 600, '4.0');
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2022);
// car1.addDriver('Anastasiia');
// console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину.`);
//     }
//
//     info() {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}.`);
//             }
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let car1 = new Cars('Audi', 'Germany', 2021, 600, '4.0');
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2022);
// car1.addDriver('Anastasiia');
// console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popeliushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let popeliushky = [
    new Popeliushka('Cinderella', '19', '33'),
    new Popeliushka('Ariel', '16', '39'),
    new Popeliushka('Tiana', '21', '39'),
    new Popeliushka('Mulan', '18', '38'),
    new Popeliushka('Bell', '20', '35'),
    new Popeliushka('Pokahontas', '22', '38'),
    new Popeliushka('Bilosnizhka', '24', '37'),
    new Popeliushka('Jasmin', '23', '37'),
    new Popeliushka('Anna', '15', '34'),
    new Popeliushka('Elza', '17', '38'),
];
console.log(popeliushky);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('John', 28,'33');
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let findPopeliuska = (princesses, prince) => {
    for (const princess of princesses) {
        if (princess.footSize === prince.shoe) {
            return `Знайдена туфелька належить прицесі, яку звати ${princess.name}. Їй ${princess.age} років.`
        }
    }
};
console.log(findPopeliuska(popeliushky, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(popeliushky.find((popeliushka) => popeliushka.footSize === prince.shoe));
