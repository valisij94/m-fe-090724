function asyncFunction() {
  setTimeout( () => {
    return 'Hey there!';
  }, 1000);
};


// 1
// setTimeout( () => {
//   console.log('Delayed message')
// }, 2000);


/*
2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно написать функцию `renderDelayedBlock`. Она должна будет сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/

function renderDelayedBlock() {
  // создать инпут и кнопку
  const container = document.querySelector('.main');
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Input delay';
  const button = document.createElement('button');
  button.textContent = 'Start';
  // добавить их в ДОМ-дерево (в контейнер main)
  container.append(input, button);
  // добавить обработчик на кнопку
  button.addEventListener('click', () => {
    const val = +input.value * 1000;
    setTimeout( () => {
      console.log('Delayed message')
    }, val);
  });
}

renderDelayedBlock();

/*
5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).
*/

const displayDateTime = () => {
  const dateTimeBlock = document.createElement('div');
  document.body.append(dateTimeBlock);

  const updateDateTime = () => {
    const now = new Date().toLocaleString('ru-RU');
    dateTimeBlock.textContent = now;
  }

  setInterval(updateDateTime, 1000);
}

displayDateTime();

const successPromise = new Promise( (resolve, reject) => {
  resolve(345);
}).then( res => console.log(res));