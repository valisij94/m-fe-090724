import { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { ThemeContext } from "../../context/themeContext/ThemeContext";

export default function ProductList( {selectedCategory} ) {

  const [products, setProducts] = useState([]);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect( () => {
    const requestProducts = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        if (selectedCategory) {
          url += '/category/' + selectedCategory;
        }
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Failed to fetch! ' + resp.statusText);
        }
        const data = await resp.json();
        setProducts(data.products);
      }
      catch (err) {
        // render something
        console.log(err);
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