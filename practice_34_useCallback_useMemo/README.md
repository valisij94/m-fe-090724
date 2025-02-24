# README

## Практическое занятие №34

Репозитарий содержит материалы по практическому занятию №34, посвященному знакомству с хуками `useCallback`, `useMemo`.

### Цели занятия
- повторение и закрепление знаний;
- решение задач.

### Разогрев
1. Что будет выведено в консоли, после того, как нажмем на первую и вторую кнопки?
```
function SomeComponent() {
  const [counter, setCounter] = useState(0);
  const refVal = useRef(0);

  const firstClickHandler = () => {
    setCounter(counter + 1);
  }

  const secondClickHandler = () => {
    refVal.current += 1;
  }

  console.log('Render', counter, refVal.current);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={firstClickHandler}>Click me!</button>
      <button onClick={secondClickHandler}>Click me!</button>
    </div>
  )
}
```

2. Дан компонент, чья задача - рендерить список. Будет ли он работать корректно?
```
function SimpleList() {
  const [list, setList] = useState([]);

  const addItem = () => {
    const item = new Date().toLocaleString();
    list.push(item);
  }

  return (
    <div>
      <button onClick={addItem}>Click me!</button>
      {list.map(item => <p key={item}>Item: {item}</p>)}
    </div>
  )
}
```

3. Дан компонент. Будет ли он работать корректно? Нужно ли что-нибудь изменить?
```
function SimpleContainer() {
  const containerRef = useRef(null);

  useEffect( () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) {
        containerRef.style.width = '50%';
      } else {
        containerRef.style.width = '75%';
      }
    });
  });

  return (
    <div ref={containerRef}>
      <img src='some_src' alt='Image'/>
      <p>Simple Image</p>
    </div>
  )
}
```

### Задачи занятия

1. У нас есть компонент `CallbackPage`. На нем есть инпут, в котором мы вводим данные, есть кнопка, и есть список "попыток". Каждый раз при вводе чего-то в инпут, компонент списка попыток перерисовывается. Исправьте это.
2. Добавьте возможность удаления попыток. Нужно сделать так, чтобы при клике на попытку в списке попыток, эта попытка удалялась.
3. Проверьте, не "сломалась" ли оптимизация (т.е. не перерисовывается ли компонент `AttemptsList` каждый раз при изменении инпута). Если сломалась - порассуждайте, почему так, и поправьте.
4. У нас есть компонент `CallbackPage`. В нем есть функция `heavyCalculation`, которая путем вычислений невероятной сложности возвращает 2-е число Фибоначчи. Она вызывается при каждом рендеринге компонента. Давайте это исправим, и мемоизируем ее.
5. Теперь предположим, что наша функция зависит от значения, введенного в инпут. Реализуйте это.
6. Давайте немного поменяем реализацию. Предположим, что наш компонент `AttemptList` теперь рендерит не все попытки, а только те, которые содержат букву `A` в значении. То есть нам нужно отфильтровать массив попыток, и передать отфильтрованный массив в `AttemptsList`. Подумайте, кто тут будет хорошим кандидатом на мемоизацию, и что передать в массиве зависимостей.

## Полезные ссылки по занятию:
 - [useCallback](https://react.dev/reference/react/useCallback#) - официальная документация
 - [Оптимизация через useCallback](https://habr.com/ru/articles/590577/) - русскоязычная, очень толковая информация - рекомендуется к прочтению!
 - [useMemo](https://react.dev/reference/react/useMemo) - официальная документация