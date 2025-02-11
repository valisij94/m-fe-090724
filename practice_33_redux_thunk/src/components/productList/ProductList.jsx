import { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { errorFetching, finishFetching, startFetching } from "../../store/slices/productsSlice";

export default function ProductList( {selectedCategory} ) {

  const products = useSelector( state => state.products.products);
  const dispatch = useDispatch();
  const filters = useSelector( state => state.filter);

  console.log('Render prods', filters)
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect( () => {
    const requestProducts = async () => {
      try {
        dispatch( startFetching() );
        let url = 'https://dummyjson.com/products';
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Failed to fetch! ' + resp.statusText);
        }
        const data = await resp.json();
        dispatch( finishFetching(data.products) );
      }
      catch (err) {
        dispatch( errorFetching(err.message || err) );
      }
    }

    requestProducts();
  }, []);

  const getFilteredProducts = () => {
    console.log('Call filter', filters)
    return products.filter( product => {
      let result = true;
      if (filters.category) {
        result = result && product.category === filters.category;
      }
      if (filters.priceFrom) {
        result = result && product.price >= +filters.priceFrom;
      }
      if (filters.priceTo) {
        result = result && product.price <= +filters.priceTo;
      }
      if (filters.name) {
        result = result && product.title.toLowerCase().includes(filters.name.toLowerCase());
      }
      return result;
    });
  }

  return (
    <div className={`productListContainer ${theme}`}>
      <h2>Products in the shop</h2>
      <button onClick={toggleTheme}>Toggle Theme from ProductList</button>
      <div className="productList">
        { getFilteredProducts().map( el => <ProductCard key={el.id} product={el}/> )}
      </div>
    </div>
  );
}