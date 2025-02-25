import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { useSelector, useDispatch } from 'react-redux';
import { startFetching, finishFetching, errorFetching } from "../../store/slices/productsSlice";

export default function ProductList() {

  const products = useSelector( state => state.products.products);

  const cart = useSelector( state => state.cart);
  console.log('Now cart is: ', cart);

  const dispatch = useDispatch();

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
        // render something
        dispatch( errorFetching(err.message || err) );
      }
    }

    requestProducts();
  }, []);

  return (
    <div className={`productListContainer`}>
      <h2>Products in the shop</h2>
      <div className="productList">
        { products.map( el => <ProductCard key={el.id} product={el}/> )}
      </div>
    </div>
  );
}