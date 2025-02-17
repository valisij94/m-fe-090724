import { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { errorFetching, finishFetching, startFetching } from "../../store/slices/productsSlice";
import { useRef } from "react";

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

  const [idx, setIdx] = useState('');
  const containerRef = useRef(null);
  const handleScrollBtnClick = () => {
    const elem = containerRef.current.querySelector(`div:nth-child(${idx})`)
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }

  return (
    <div className={`productListContainer ${theme}`}>
      <h2>Products in the shop</h2>
      <button onClick={toggleTheme}>Toggle Theme from ProductList</button>
      <input value={idx} onChange={(e) => {setIdx(e.target.value)}} />
      <button onClick={handleScrollBtnClick}>Scroll to product</button>
      <div className="productList" ref={containerRef}>
        { products.map( el => <ProductCard key={el.id} product={el}/> )}
      </div>
    </div>
  );
}