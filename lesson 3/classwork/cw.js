// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
console.log("Завдання 1");

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

//     2. перебрати його циклом for
console.log("Завдання 2");


for (let j = 0; j < arr.length; j++) {
    // let arrElement = arr[j];
    console.log(arr[j]);
}

for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("Завдання 3");

let k = 0;
while (k < arr.length) {
    if (k % 2 !== 0) {
        console.log(arr[k]);
    }
        k++;
}
k = arr.length - 1;
while (k >= 0) {
    if (k % 2 !== 0) {
        console.log(arr[k]);
    }
        k--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("Завдання 4");

for (let j = 0; j < arr.length; j++) {
    if (j % 2 !== 0) {
        console.log(arr[j]);
    }
}
for (let j = arr.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        console.log(arr[j]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log("Завдання 5");

let l = 0;
while (l < arr.length) {
    if (arr[l] % 2 === 0) {
        console.log(arr[l]);
    }
        l++;
}

l = arr.length - 1;
while (l >= 0) {
    if (arr[l] % 2 === 0) {
        console.log(arr[l]);
    }
        l--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("Завдання 6");

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
}

for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log("Завдання 7");

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) {
        arr[j] = 'okten';
        console.log(arr[j]);
    }
    console.log(arr);
}

for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 3 === 0) {
        arr[j] = 'okten';
        console.log(arr[j]);
    }
}
console.log(arr);


// 8. вивести масив в зворотньому порядку.
console.log("Завдання 8");

arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let j = arr.length - 1; j >= 0; j--) {
    // let arrElement = arr[j];
    console.log(arr[j])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

