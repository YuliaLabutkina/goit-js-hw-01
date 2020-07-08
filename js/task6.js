'use strict';

let total = 0;
let inputNumber;

do {
    inputNumber = prompt('Введите число!');

    if (inputNumber !== null) {

        if (Number.isNaN(+inputNumber)) {
            alert('Было введено не число! Введите число пожалуйста!');
            continue;
        }

        total += +inputNumber;
    }

} while (inputNumber !== null);

alert(`Общая сумма чисел равна ${total}.`);