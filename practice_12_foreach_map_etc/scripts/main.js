// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const filters = ['foo', 'bar', 'baz', 'of', 'is'];


const search = ['timon', 'is', 'a', 'suricate'];

const simpleElems = ['this', 'is', 'that', 'or', 'this', 'is', 'are', 'yes', 'are'];

const years = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

const year = +prompt('Enter your birth year');
if (year < 1984) {
  console.log('Cannot define year type!');
} else {
  const diff = year - 1984;
  const animalIndex = diff % 12;
  const elemIndex = diff % 5;
  console.log(`This is year of ${elements[elemIndex]} ${years[animalIndex]}`)
}