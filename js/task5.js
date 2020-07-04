'use strict';

const userInput = prompt('Укажите страну доставки пожалуйста!');
let price;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  let normalizedInput = userInput.toLowerCase();

  switch (normalizedInput) {
    case 'китай':
      price = 100;
      normalizedInput = "Китай";
      console.log(`Доставка в ${normalizedInput} будет стоить ${price} кредитов.`);
      break;

    case 'чили':
      price = 250;
      normalizedInput = "Чили";
      console.log(`Доставка в ${normalizedInput} будет стоить ${price} кредитов.`);
      break;
    
    case 'австралия':
      price = 170;
      normalizedInput = "Австаралию";
      console.log(`Доставка в ${normalizedInput} будет стоить ${price} кредитов.`);
      break;

    case 'индия':
      price = 80;
      normalizedInput = "Индию";
      console.log(`Доставка в ${normalizedInput} будет стоить ${price} кредитов.`);
      break;

    case 'ямайка':
      price = 120;
      normalizedInput = "Ямайку";
      console.log(`Доставка в ${normalizedInput} будет стоить ${price} кредитов.`);
      break;

    default:
    alert('В вашей стране доставка не доступна');
}
}