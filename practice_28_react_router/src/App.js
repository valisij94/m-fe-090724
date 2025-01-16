import { useContext, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import ProductList from './components/productList/ProductList';
import AddProduct from './components/addProduct/AddProduct';
import { ThemeContext } from './context/themeContext/ThemeContext';

function App() {

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

  const { toggleTheme } = useContext(ThemeContext);


  return (
    <div className="App">
      <h2>Here we will render the Products List</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Filter filters={filters} category={category} setCategory={setCategory} />
      <AddProduct filters={filters}/>
      <ProductList selectedCategory={category}/>
    </div>
  );
}

export default App;