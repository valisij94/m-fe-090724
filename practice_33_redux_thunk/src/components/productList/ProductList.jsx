import { useContext, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../store/slices/productsSlice";

export default function ProductList( {selectedCategory} ) {

  const { products, error } = useSelector( state => state.products);
  const dispatch = useDispatch();
  const filters = useSelector( state => state.filter);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect( () => {
    dispatch( fetchProducts() );
  }, []);

  const getFilteredProducts = () => {
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
      { !error ? <div className="productList">
        { getFilteredProducts().map( el => <ProductCard key={el.id} product={el}/> )}
      </div> : <p>{error}</p> }
    </div>
  );
}