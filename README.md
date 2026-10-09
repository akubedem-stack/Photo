# 📷 Photo

> Учебный проект по пособию: **Node.js · Express · MongoDB · EJS**

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white" alt="EJS">
</p>

<p align="center">
  <strong>📷 Кодовое слово: Photo</strong>
</p>

---

## 📖 О проекте

**Photo** — учебный проект по пособию.
Веб-приложение на полном стеке JavaScript: от простейшего сервера на Express до системы аутентификации с сессиями в MongoDB.

**Референс:** [akubedem-stack.github.io/my-site](https://akubedem-stack.github.io/my-site/)

---

## ✨ Возможности

- 🌐 Сервер на Express
- 📄 Серверный рендеринг через EJS
- 🎨 Адаптивная вёрстка на Bootstrap
- 💾 Хранение данных в MongoDB
- 🧩 Модели через Mongoose
- 🍪 Сессии в MongoDB (connect-mongo)
- 🔐 Регистрация и вход пользователей
- 🚪 Logout
- 🔒 Закрытые страницы для незалогиненных

---

## 🛠 Стек

| Технология | Роль |
|-----------|------|
| **Node.js** | Runtime |
| **Express** | HTTP-фреймворк |
| **MongoDB** | База данных |
| **Mongoose** | ODM для MongoDB |
| **EJS** | Шаблонизатор |
| **Bootstrap 5** | UI |

---

## 🌿 Ветки

| Ветка | Пункт пособия |
|-------|--------------|
| `main` | Основная (стабильная) |
| `ph_4_1` … `ph_4_4` | Глава 4. Маршрутизаторы и шаблоны |
| `ph_5_1` … `ph_5_2` | Глава 5. Навигация |
| `ph_6_1` … `ph_6_3` | Глава 6. MongoDB |
| `ph_7_1` … `ph_7_3` | Глава 7. Mongoose |
| `ph_8_1` … `ph_8_4` | Глава 8. Отображение данных |
| `ph_9_1` … `ph_9_5` | Глава 9. Cookie и Session |
| `ph_10_1` … `ph_10_8` | Глава 10. Аутентификация |


## 📁 Структура

```
photo/
├── middlewares/        # Посредники
│   ├── checkAuth.js
│   ├── createMenu.js
│   └── createUser.js
├── models/             # Mongoose-модели
│   ├── photo.js
│   └── user.js
├── public/             # Статика
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/             # Маршрутизаторы
│   ├── index.js
│   ├── photos.js
│   └── users.js
├── views/              # Шаблоны EJS
│   ├── layout/
│   ├── index.ejs
│   ├── logreg.ejs
│   └── photo.ejs
├── app.js
├── createDB.js
├── data.js
└── package.json

---





