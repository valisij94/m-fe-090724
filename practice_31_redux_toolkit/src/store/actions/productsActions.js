export const PRODUCTS_ACTIONS = {
  // экшн для начала загрузки списка товаров
  START_FETCHING: 'PRODUCTS/START_FETCHING',
  // экшн для успешной загрузки товаров (кладем их в редакс стейт)
  PRODUCTS_FETCHED: 'PRODUCTS/PRODUCTS_FETCHED',
  // экшн если что то пошло не так (кладем в стейт сообщение об ошибке)
  PRODUCTS_FETCH_ERROR: 'PRODUCTS/FETCH_ERROR'
}

export const startProductsRequest = () => {
  return {
    type: PRODUCTS_ACTIONS.START_FETCHING
  }
}
export const finishProductsRequest = (products) => {
  return {
    type: PRODUCTS_ACTIONS.PRODUCTS_FETCHED,
    payload: products
  }
}
export const errorProductsRequest = (error) => {
  return {
    type: PRODUCTS_ACTIONS.PRODUCTS_FETCHED,
    payload: error
  }
}