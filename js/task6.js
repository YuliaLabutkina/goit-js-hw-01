'use strict';

let total = 0;

while (true) {
    let inputNumber = prompt('Введите число!');


    if (inputNumber === null) {
        console.log('Отменено пользователем!');
        break;
    }

    inputNumber = Number(inputNumber);

    if (!!inputNumber && Number.isInteger(inputNumber)) {
        total += inputNumber;
    } else {
        alert('Было введено не число! Введите число пожалуйста!');
    }
}

alert(`Общая сумма чисел равна ${total}.`);