const productInfo = {
  name: 'Electric Saw',
  price: 250,
  category: 'Tools',
  describeSelf() {
    return `Product ${this.name}, price - ${this.price}`;
  }
};

const weirdArray = {
  2: 'Timon',
  length: 3,
  0: 'Saw',
  1: 'Hammer',
};

const veryWeirdArray = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};

/*
7. Пишем простую функцию `validateInput(errorText)` валидации текстового поля (`input`). предполагается, что она будет вызываться в контексте DOM-элемента, HTMLInput. Нужно проверить:
 - если у инпута есть атрибут required - то проверить что его значение непустое.
 - если значение пустое - то добавить к инпуту класс error, и в текст записать сообщение errorText.
 - если нет required - то вернуть true.
 */

// Функция будет вызываться в контексте DOM-элемента, а именно - HTML- инпут

function validateInput(errorText) {
  // this === HTMLInput
  if (this.required) {
    const value = this.value;
    if (value.length === 0)  {
      this.classList.add('error');
      this.value = errorText;
    }
  } else {
    return true;
  }
}
const inputs = document.querySelectorAll('input');
inputs.forEach( input => validateInput.call(input, 'Error Text') );

// HTMLInputElement.prototype.validateSelf = validateInput;
// const inputs = document.querySelectorAll('input');
// inputs.forEach( input => input.validateSelf('Required text!'));