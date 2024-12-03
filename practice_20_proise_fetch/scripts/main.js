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