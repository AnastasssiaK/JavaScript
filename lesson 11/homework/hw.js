// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let taskOne = document.createElement('h3');
taskOne.innerText = 'Task 1';

let formOne = document.createElement('form');

let nameDiv = document.createElement('div');
nameDiv.innerText = 'Name:';
let name = document.createElement('input');

let ageDiv = document.createElement('div');
ageDiv.innerText = 'Age:';
let age = document.createElement('input');

let btnOne = document.createElement('button');
btnOne.innerText = 'Відправити';

btnOne.onclick = function () {
    localStorage.setItem('user', JSON.stringify({name: `${name.value}`, age: `${age.value}`}));
    alert('Відправено.');
    inputs.value = '';
}

nameDiv.appendChild(name);
ageDiv.appendChild(age);
formOne.append(nameDiv, ageDiv);
document.body.append(taskOne, formOne, btnOne);


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let taskTwo = document.createElement('h3');
taskTwo.innerText = 'Task 2';

let formTwo = document.createElement('form');

let modelDiv = document.createElement('div');
modelDiv.innerText = 'Model:';
let model = document.createElement('input');
modelDiv.appendChild(model);

let typeDiv = document.createElement('div');
typeDiv.innerText = 'Type:';
let type = document.createElement('input');
typeDiv.appendChild(type);

let volumeDiv = document.createElement('div');
volumeDiv.innerText = 'Volume:';
let volume = document.createElement('input');
volumeDiv.appendChild(volume);

let btnTwo = document.createElement('button');
btnTwo.innerText = 'Відправити';

btnTwo.onclick = function () {
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push({model: model.value, type: type.value, volume: volume.value});
    localStorage.setItem(`cars`, JSON.stringify(cars));
    alert('Відправено.');
    inputs.value = '';
}

formTwo.append(modelDiv,typeDiv,volumeDiv);
document.body.append(document.createElement('hr'), taskTwo, formTwo,btnTwo);