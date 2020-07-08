'use strict';

const userInput = prompt('Укажите страну доставки пожалуйста!');
const deliveryCountryChina = 'Китай';
const deliveryCountryChile = 'Чили';
const deliveryCountryAustralia = 'Австаралию';
const deliveryCountryIndia = 'Индию';
const deliveryCountryJamaica = 'Ямайку';
const costDeliveryChina = 100;
const costDeliveryChile = 250;
const costDeliveryAustralia = 170;
const costDeliveryIndia = 80;
const costDeliveryJamaica = 120;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {

  switch (userInput.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в ${deliveryCountryChina} будет стоить ${costDeliveryChina} кредитов.`);
      break;

    case 'чили':
      console.log(`Доставка в ${deliveryCountryChile} будет стоить ${costDeliveryChile} кредитов.`);
      break;
    
    case 'австралия':
      console.log(`Доставка в ${deliveryCountryAustralia} будет стоить ${costDeliveryAustralia} кредитов.`);
      break;

    case 'индия':
      console.log(`Доставка в ${deliveryCountryIndia} будет стоить ${costDeliveryIndia} кредитов.`);
      break;

    case 'ямайка':
      console.log(`Доставка в ${deliveryCountryJamaica} будет стоить ${costDeliveryJamaica} кредитов.`);
      break;

    default:
    alert('В вашей стране доставка не доступна');
}
}