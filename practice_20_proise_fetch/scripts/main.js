const racers = [
  { name: 'Dominic Toretto', car: 'Dodge Charger' },
  { name: 'Brian O\'Connor', car: 'Nissan Skyline' },
  { name: 'Daniel Morales', car: 'Peugeot 308' },
  { name: 'Frankenstein', car: 'Chevrolet Camaro' }
]

const categoriesSelect = document.querySelector('.categoriesSelect');
const productsContainer = document.querySelector('.productsContainer');

const renderCategories = (categories) => {
  categories.forEach( cat => {
    const categoryEl = document.createElement('option');
    categoryEl.value = cat.slug;
    categoryEl.textContent = cat.name;
    categoriesSelect.append(categoryEl);
  });
}

function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.title;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.thumbnail ? product.thumbnail : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}

const renderProducts = (products) => {
  products.forEach( (prod) => {
      const productCard = renderProduct(prod);
      container.append(productCard);
  })
};


/*
2. Пишем функцию `makeRacer`. Она будет нам создавать объект-гонщика, который будет участвовать в заезде. Функция будет принимать объект с двумя свойствами: имя гонщика, и название машины. Задача - вернуть промис, который будет зарезолвлен спустя случайное количество секунд объектом с данными гонщика. Для вычисления времени, воспользуйтесь формулой `Math.random() * 2000`. */

function makeRacer( racer ) {
  const raceTime = Math.random() * 2000;
  return new Promise( resolve => {
    setTimeout( () => {
      resolve({...racer, raceTime: raceTime });
    }, raceTime);
  })
}

/*
3. Пишем асинхронную функцию `startTraining`. Она должна принять в аргументах массив гонщиков (`racers`), пройтись по массиву, и запустить заезд для каждого гонщика. Нужно дождаться, пока все доберутся до фииниша, и вывести гонщиков в порядке прихода к финишу (например, "1 - Daniel Morales, Peugeot 308").
*/

async function startTraining( racers ) {
  const promises = racers.map( racerData => makeRacer(racerData) );
  const finishers = await Promise.all(promises);
  console.log(finishers);
}

function startTrainingWithThen( racers ) {
  const promises = racers.map( racerData => makeRacer(racerData) );
  return Promise.all(promises)
    .then( result => console.log(result));
}

/*
4. Пишем асинхронную функцию `startRace`. Теперь нас интересует тот гонщик, который первым доберется до финиша. Нужно, чтобы функция возвращала объект с данными этого гонщика. Все остальные нас не интересуют.
*/

function startRace( racers ) {
  const promises = racers.map( racerData => makeRacer(racerData) );
  return Promise.race(promises);
}

startRace(racers).then( winner => console.log(winner));

/*
5. Пишем асинхронную функцию `getCategories`, которая запросит список категорий товаров с бэка, по адресу `https://dummyjson.com/products/categories`. Используем синтаксис async/await. Нужно чтобы функция вернула список категорий.
*/

async function getCategories() {
  try {
    const resp = await fetch(`https://dummyjson.com/products/categories`);
    const categories = await resp.json();
    return categories;
  }
  catch (err) {
    console.log('Something went wrong');
  }
}

getCategories().then(cats => console.log(cats));