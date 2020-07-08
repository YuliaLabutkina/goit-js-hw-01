'use strict';

const inputQuantityRequest = prompt('Какое количество дроидов хотели бы приобрести?');
let credits = 23580;
const pricePerDroid = 3000;

if (inputQuantityRequest === null) {
    console.log('Отменено пользователем!');
    
}  else {
        const totalPrice = inputQuantityRequest * pricePerDroid;
    
        if (totalPrice <= credits) {
            console.log(`Вы купили ${inputQuantityRequest} дроидов, на счету осталось ${credits -= totalPrice} кредитов.`);
        } else {
            console.log('Недостаточно средств на счету!');
        }
}