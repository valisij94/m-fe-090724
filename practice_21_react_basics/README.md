# README

## Практическое занятие №21

### Тема:

Репозитарий содержит материалы по практическому занятию №21, посвященному ознакомлению с фреймворком React.js.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Структура каталогов в create-react-app
 - node_modules - здесь содержатся все зависимости проекта, то есть библиотеки, которые мы подключили (или которые были подключены по умолчанию к проекту create-react-app). Эту папку мы не трогаем, и руками в ней ничего не меняем - ее содержимым управляет NPM при установке/обновлении/удалении зависимостей
 - public - в этой директории хранится файл `index.html`, а также ресурсы проекта (картинки, файл манифеста и файл для поисковых роботов). В этой папке нам будет интересен только `index.html`.
 - src - здесь все исходники (JS, CSS, юнит-тесты). Здесь мы будем работать: создавать свои каталоги, файлы, писать код и стили и многое другое.
 - `package-lock.json` - эталонный файл зависимостей проекта. Вручную ничего в нем не меняем.
 - `package.json` - файл с описанием проекта и его зависимостей. Вручную менять можно, но пока мы этого делать не будем.

### Задачи занятия
1. Разбираемся с тем, как работает JSX. В файле `App.js`, удаляем все из `<div className='App'>`. Вместо этого содержимого, нам нужно добавить туда параграф с текстом `Hello World from React!`
2. Работаем с JavaScript в JSX. Теперь в наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`). Чтобы работать с JS, нам понадобится обернуть содержимое нашего параграфа в фигурные скобки.
3. Попробуем создать свой компонент, назовем его `SimpleParagraph`. Это будет компонент, который будет рисовать нам параграф с текстом `Hello World from React!`. Смысловой нагрузки у такого компонента пока немного - но мы это исправим в будущем. Нужно, в файл `App.js`, создать функцию `SimpleParagraph`, которая будет создавать такой параграф.
4. Обычно компоненты имеют свое "место жительства" - отдельные файлы. Переселим наш компонент. Для этого:
 - в папке src создаем подпапку `components`
 - в папке `components` создаем файл `SimpleParagraph.js`
 - в этом файле, наша задача - создать компонент, который отрендерит нам параграф с текстом `Hello From new component!`
5. Применяем созданный компонент в `App.js`. Нам нужно:
 - импортировать свежесозданный компонент (`import`)
 - отрендерить его (например, в самом низу нашего блока `return`). Важный момент! React не умеет возвращать несколько DOM-узлов (или компонентов), поэтому нам нужно ВЕСЬ возвращаемый результат обернуть в `<div></div`. То есть, мы должны гарантировать, что наша функция, в блоке return вернет нам ОДИН DOM-элемент или React-компонент.
6. Реализуем еще один простой компонент, `SimpleHeader`, который будет рисовать нам заголовок `h2` с текстом Simple Header.
7. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
8. Композиция компонентов. Нужно в компонент `LoginForm`, добавить заголовок - с использованием нашего компонента `SimpleHeader`.

### Полезные ссылки по занятию:
 - Описание [create-react-app](https://create-react-app.dev/).
 - Свежая [документация](https://react.dev/) по React. Имеет смысл посмотреть "по диагонали", погулять по сайту, и посмотреть на примеры.
 - React [основы](https://react.dev/learn). Рекомендуется просмотреть хотя бы до раздела "Responding to events".
