# Приложение "Список контактов"

## Скрипты для запуска

Для запуска приложения используйте следующие скрипты:

### `npm start`

Запустит приложение в режиме разработки по адресу http://localhost:3000.

### `npm run server`

Запустит сервер с моковыми данными по адресу http://localhost:5000.

**node-v:v16.15.0**

## Описание эндпоинтов

Список моковых данных доступен по следующим адресам:

http://localhost:5000/users - список пользователей для входа

http://localhost:5000/contacts - список контактов

## Вход в систему

Логин:test@email.com

Пароль:qwerty

## Особенности

Структура проекта следует идеям чистой архитектуры. В качестве стейт менеджера использован MobX. Стили компонентов реализованы при помощи Tailwind CSS. Тестовый сервер реализован при помощи JSON Web Server.

## Описание

Приложение представляет собой личный кабинет.

В приложении доступно две страницы:

Страница входа

Страница со списком контактов