// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

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

for (let j = 0; j < arr.length; j++) {
    // let arrElement = arr[j];
    console.log(arr[j]);
}
for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let k = 0;
while (k < arr.length) {
    if ((arr.length - 1) % 2 !== 0) {
        console.log(arr[k]);
        k++;
    }
}
k = arr.length -1;
while (k >= 0) {
    if ((arr.length - 1) % 2 !== 0) {
        console.log(arr[k]);
        k--;
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 0; j < arr.length; j++) {
    if ((arr.length - 1) % 2 !== 0) {
        console.log(arr[j]);
    }
}
for (let j = arr.length - 1; j >= 0; j--) {
    if ((arr.length - 1) % 2 !== 0) {
        console.log(arr[j]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let l = 0;
while (l < arr.length) {
    if (arr[l] % 2 === 0) {
        console.log(arr[l]);
        l++;
    }
}
l = arr.length - 1;
while (l >= 0) {
    if (arr[l] % 2 === 0) {
        console.log(arr[l]);
        l--;
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

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

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) {
        j = 'okten';
        console.log(arr[j]);
    }
}
for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 3 === 0) {
        j = 'okten';
        console.log(arr[j]);
    }
}

// 8. вивести масив в зворотньому порядку.

for (let j = arr.length - 1; j >= 0; j--) {
    // let arrElement = arr[j];
    console.log(arr[j])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

