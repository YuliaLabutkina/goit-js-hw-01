'use strict';

const userAuthorization = prompt('Пожалуйста введите пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;


if (userAuthorization === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (userAuthorization === null) {
    message = 'Отменено пользователем!';
} else { 
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);





