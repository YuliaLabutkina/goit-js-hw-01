'use strict';

let inputQuantityRequest = prompt('Какое количество дроидов хотели бы приобрести?');
let credits = 23580;
const pricePerDroid = 3000;

if (inputQuantityRequest === null) {
    console.log('Отменено пользователем!');
    
}  else {
    inputQuantityRequest = Number(inputQuantityRequest);

    if (!!inputQuantityRequest && Number.isInteger(inputQuantityRequest)) {
        let totalPrice = inputQuantityRequest * pricePerDroid;
    
        if (totalPrice <= credits) {
            credits -= totalPrice;
            console.log(`Вы купили ${inputQuantityRequest} дроидов, на счету осталось ${credits} кредитов.`);
        } else {
            console.log('Недостаточно средств на счету!');
        }
    
    } else {
        console.log('Вы ввели не число. Введите число пожалуйста!');
    }
}