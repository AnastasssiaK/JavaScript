// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutWord(str, n) {
    let newRes = [];
    for (let i = 0; i < str.length; i += n) {
        newRes.push(str.substr(i, n));
    }
    return newRes;
}

document.writeln(`<div>${cutWord('наслаждение', 3)}</div>`);

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

function validateEmail (email) {
    let domain = email.indexOf("@");
    let point = email.indexOf(".");
    if (domain < 1  ||  (point - domain) <= 2 || email.split('@').length > 2)  {
        console.log(`Ти ввів неправильну електронну пошту.`);
    } else {
        console.log(`Твій email: ${email.toLowerCase()}`);
    }
    return email;
}
validateEmail('someemail@gmail.com');
validateEmail('someeMAIL@gmail.com');
validateEmail('someeMAIL@i.ua');
validateEmail('some.email@gmail.com');
validateEmail('somee@MAIL@i.ua');


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((min, max) => max.modules.length - min.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

function count(str, stringsearch) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            result += 1;
        }
    }
    return result;
}

let symb = "о";
let str = "Астрономия это наука о небесных объектах";
document.write(`<div>Сума введеного симоволу в цій строці = ${count(str, symb)}.</div>`) // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');

str = "Сила тяжести приложена к центру масс тела";
document.write(`<div>${cutString(str, 5)}</div>`); // 'Сила тяжести приложена к центру'


