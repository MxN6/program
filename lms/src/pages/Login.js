// Внутри вашего компонента, например, в Login.js
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    const telegramWebApp = window.Telegram.WebApp;

    // Получаем информацию о пользователе
    const user = telegramWebApp.initDataUnsafe.user;
    console.log(user); // Для проверки, вы можете увидеть информацию в консоли

    // Дополнительные действия с полученными данными пользователя

    if (telegramWebApp.initData) {
      // Отправляем данные на сервер для авторизации
      fetch('/auth/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: telegramWebApp.initDataUnsafe.user,
          authData: telegramWebApp.initData,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Успешный вход, редирект на Dashboard или Home
          window.location.href = '/dashboard';
        } else {
          // Обработка ошибки
          console.error(data.message);
        }
      });
    }
  }, []);

  return <div>Loading...</div>;
};

export default Login;