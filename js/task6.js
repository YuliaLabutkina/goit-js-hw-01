'use strict';

let total = 0;
let input;

do {
    input = prompt('Введите число!');

    if (input !== null) {

        if (Number.isNaN(+input)) {
            alert('Было введено не число! Введите число пожалуйста!');
            continue;
        }

        total += +input;
    }

} while (input !== null);

alert(`Общая сумма чисел равна ${total}.`);