// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let task = document.createElement('h3');
// task.innerText = 'Task 1';
//
// let forms = document.createElement('div');
// forms.classList.add('forms');
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// let formNameOne = document.createElement('h5');
// formNameOne.innerText = 'Form 1';
// let inputOneFO = document.createElement('input');
// inputOneFO.setAttribute('name', 'inputOneFO');
// let inputTwoFO = document.createElement('input');
// inputTwoFO.setAttribute('name', 'inputTwoFO');
// formOne.append(formNameOne, inputOneFO, inputTwoFO);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// let formNameTwo = document.createElement('h5');
// formNameTwo.innerText = 'Form 2';
// let inputOneFT = document.createElement('input');
// inputOneFT.setAttribute('name', 'inputOneFT');
// let inputTwoFT = document.createElement('input');
// inputTwoFT.setAttribute('name', 'inputTwoFT');
// formTwo.append(formNameTwo, inputOneFT, inputTwoFT);
//
// let btn = document.createElement('button');
// btn.innerText = 'Зчитати інформацію';
//
// forms.append(formOne, formTwo);
// document.body.append(task, forms, btn);
//
// let hr = document.createElement('hr');
// document.body.appendChild(hr);
//
// btn.onclick = function () {
//     console.log(`Input One (Form 1): ${inputOneFO.value}`);
//     console.log(`Input Two (Form 1): ${inputTwoFO.value}`);
//     console.log(`Input One (Form 2): ${inputOneFT.value}`);
//     console.log(`Input Two (Form 2): ${inputTwoFT.value}`);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let task = document.createElement('h3');
task.innerText = 'Task 2';

let inputs = document.createElement('div');
inputs.classList.add('inputs');

let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'inputOne');
let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'inputTwo');
let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree');

let btn = document.createElement('button');
btn.innerText = 'Зчитати інформацію';

let hr = document.createElement('hr');

inputs.append(inputOne, inputTwo, inputThree);
document.body.append(task, inputs, btn, hr);

btn.addEventListener('click', function () {
    let one = inputOne.value;
    let two = inputTwo.value;
    let three = inputThree.value;

    let trOne = document.createElement('tr');
    trOne.innerText = one;

    let trTwo = document.createElement('tr');
    trTwo.innerText = two;

    let trThree = document.createElement('tr');
    trThree.innerText = three;

    document.body.append(trOne, trTwo, trThree);

});

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let task = document.createElement('h3');
// task.innerText = 'Task 3';
//
// let badWords  = ['shit','bitch','bastard','fool','stupid','freak'];
// let input = document.createElement('input');
// input.style.display = 'flex';
// input.style.width = '40%';
//
// let btn = document.createElement('button');
// btn.innerText = 'Перевірити';
//
// let hr = document.createElement('hr');
//
// document.body.append(task, input, btn, hr);
//
// btn.addEventListener('click', function audit () {
//     let dataFromInput = input.value.toLowerCase();
//     for (const item of badWords) {
//         if (item === dataFromInput) {
//             alert('Не вживай поганих слів!');
//             input.value = '';
//             return;
//         }
//     }
//     if (dataFromInput) {
//             alert(`Ти написав: "${input.value}"`);
//             input.value = '';
//         }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let task = document.createElement('h3');
// task.innerText = 'Task 4';
//
// let badWords = ['shit', 'bitch', 'bastard', 'fool', 'stupid', 'freak'];
//
// let input = document.createElement('input');
// input.style.display = 'flex';
// input.style.width = '40%';
//
// let btn = document.createElement('button');
// btn.innerText = 'Перевірити';
//
// let hr = document.createElement('hr');
//
// document.body.append(task, input, btn, hr);
//
// btn.addEventListener('click', function () {
//     let dataFromInput = input.value.toLowerCase();
//     for (const item of badWords) {
//         if (dataFromInput.includes(item)) {
//             alert('Не вживай поганих слів!');
//             input.value = '';
//             return;
//         }
//     }
//         if (dataFromInput) {
//             alert(`Ти написав: "${input.value}"`);
//             input.value = '';
//         }
// })