# README

## Практическое занятие №32

Репозитарий содержит материалы по практическому занятию №32, посвященному знакомству с хуком `useRef`.

### Цели занятия
- повторение и закрепление знаний;
- решение задач.

### Разогрев
1. Что выведет код?
```
console.log('First');

const myPromise = new Promise( (resolve, reject) => {
  resolve('Result');
})
.catch( err => console.log(err))
.then( result => {
  console.log(result);
});
console.log('Third');
```

2. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  reject('Result');
})
.then( result => {
  console.log(result);
})
.catch( err => console.log(err));
console.log('Third');
```

3. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  resolve('Result');
})
.finally( () => console.log('Finally'))
.catch( err => console.log(err))
.then( result => {
  console.log(result);
});
console.log('Third');
```

### Задачи занятия
1. В компоненте `App`, есть два инпута. Сделайте так, чтобы при монтировании компонента, фокус устанавливался бы на второй инпут.
2. Еще работа с DOM. В компоненте `App`, добавьте реф на контейнер инпутов. При первом рендере компонента, выводите в консоль его фактические размеры (offsetWidth, offsetHeight)
3. Закрепление императивной работы с DOM. Добавьте в компонент `App.js` кнопку. При нажатии на кнопку, выводить в консоль значение инпутов из п.1. Сделать это БЕЗ использования `useState`, через рефы.
4. Реализовать подсчет кликов на кнопке в компоненте `App`, при этом при изменении счетчика НЕ ПЕРЕРИСОВЫВАТЬ компонент.
5. При нажатии на кнопку, менять цвет фона контейнера на один из: красный, зеленый, синий (FF0000, 00FF00, 0000FF). Реализовать без использования стейта.
6. В компоненте ProductList, добавить инпут и кнопку. В инпуте будем вводить номер товара. При нажатии на кнопку нужно выполнить прокрутку к карточке этого товара (если она есть). Чтобы выполнить прокрутку (показать DOM-узел на экране), нужно его найти, и вызвать у него функцию `scrollIntoView`.
```
  domNode.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
```

7. Немного усложним. Теперь в инпут будем вводить название товара, и при нажатии на кнопку, мы должны выполнить прокрутку к первому товару, чье название содержит значение из инпута.

### Полезные ссылки
[Использование рефов](https://react.dev/learn/referencing-values-with-refs#) - работа с рефами как с хранилищем.
[Императивная работа с DOM](https://react.dev/learn/manipulating-the-dom-with-refs) - работа с DOM напрямую.
[Хук useRef](https://react.dev/reference/react/useRef) - информативно, с интерактивными примерами.