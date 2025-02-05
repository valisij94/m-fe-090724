import { useEffect, useState } from "react";
import Filter from "../components/filter/Filter";
import ProductList from "../components/productList/ProductList";

export default function ProductsPage() {

  const [category, setCategory] = useState('');

  const[filters, setFilters] = useState([]);
  useEffect(() => {
      const fetchFilters =  async (url) => {
          try{
              let res = await fetch(url);
              if(!res.ok){
                  throw new Error(`HTTP Error: ${res.status}`);
              }
              let data = await res.json();
              setFilters(data);
          } catch(err){
              console.error(err);
          }
      }

      fetchFilters("https://dummyjson.com/products/categories");
  }, []);
  return (
    <div>
      <h2>Here we will render the Products List</h2>
      <Filter filters={filters} category={category} setCategory={setCategory} />
      <ProductList selectedCategory={category}/>
    </div>
  );
}