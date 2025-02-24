# README

## Практическое занятие №28

### Тема:

Репозитарий содержит материалы по практическому занятию №28, посвященному работе с библиотекой `react-router`.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Подготовительная задача. Создаем страницу приветствия для нашего приложения. Создадим папку `pages`, а в ней файл - `HomePage.jsx`. Это будет домашняя страница нашего проекта. Разместить на ней заголовок с приветствием "Hello from app with Router".
2. Интегрируем роутер в наше приложение. Проект уже содержит добавленную зависимость, можно использовать библиотеку `react-router-dom`. Задача - в компоненте `App` обеспечить, чтобы на странице по умолчанию (адрес `/`) рендерился компонент `HomePage`. И нам также предстоит сделать страницу добавления нового товара - `AddProductPage.jsx`, которая будет содержать компонент `AddProduct.jsx`. Эта страница должна быть доступна по пути `/product`.
3. Сделаем "универсальный" заголовок, который будет отображаться на всех страницах. Это должен быть обычный заголовок с текстом "This should appear in all pages".
4. Делаем роут "не найдено". Наша задача, чтобы при попытке перехода на несуществующую страницу выдавался параграф с текстом 'There is no page with such name!'.
5. Делаем еще одну страницу `ProductsPage`, для отображения списка товаров `ProductList`, и делаем роут `/products`. Он должен вести на страницу товаров.
6. Теперь создаем линки на эти маршруты. В компоненте `App`, добавить ссылки на наши страницы.
7. Доработаем наше приложение. В компонент `ProductCard` нужно добавить возможность перехода на страницу просмотра и редактирования данных конкретного товара. Для этого, на карточку товара добавляем кнопку "Edit". При клике на кнопку, нужно осуществлять переход на страницу `/product/PRODUCT_ID` - то есть переходить на страницу товара, и передавать в УРЛе идентификатор товара. Страницу товара нам предстоит создать (`ProductDetailPage`), и на ней нужно пока что просто разместить текст "Product daya will be added here soon!".
8. Нужно, чтобы после успешной обработки формы на странице `AddProductPage`, осуществлялась навигация на главную страницу (`/`).

### Полезные ссылки по занятию:
 - [React Router v6](https://blog.logrocket.com/react-router-v6-guide/) - отличная информативная статья (увы, англоязычная), по использованию свежей версии роутера.
 - [Что нового в React Router](https://habr.com/ru/companies/kts/articles/598835/) - русскоязычная статья, освещает основные отличия нового роутера от предыдущих версий. Можно просмотреть после ознакомления с первой статьей, и оф.документацией.
