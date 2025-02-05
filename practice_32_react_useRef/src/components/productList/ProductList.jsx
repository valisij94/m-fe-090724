import { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { errorFetching, finishFetching, startFetching } from "../../store/slices/productsSlice";

export default function ProductList( {selectedCategory} ) {

  const products = useSelector( state => state.products.products);
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect( () => {
    const requestProducts = async () => {
      try {
        dispatch( startFetching() );
        let url = 'https://dummyjson.com/products';
        if (selectedCategory) {
          url += '/category/' + selectedCategory;
        }
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Failed to fetch! ' + resp.statusText);
        }
        const data = await resp.json();
        dispatch( finishFetching(data.products) );
      }
      catch (err) {
        // render something
        dispatch( errorFetching(err.message || err) );
      }
    }

    requestProducts();
  }, [selectedCategory]);

  return (
    <div className={`productListContainer ${theme}`}>
      <h2>Products in the shop</h2>
      <button onClick={toggleTheme}>Toggle Theme from ProductList</button>
      <div className="productList">
        { products.map( el => <ProductCard key={el.id} product={el}/> )}
      </div>
    </div>
  );
}