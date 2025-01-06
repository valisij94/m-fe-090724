import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

export default function ProductList( {selectedCategory} ) {

  const [products, setProducts] = useState([]);

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
    <div className="productListContainer">
      <h2>Products in the shop</h2>
      <div className="productList">
        { products.map( el => <ProductCard key={el.id} product={el}/> )}
      </div>
    </div>
  );
}