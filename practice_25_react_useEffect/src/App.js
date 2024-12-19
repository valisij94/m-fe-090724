import { useState } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import ProductList from './components/productList/ProductList';


function App() {

  const [category, setCategory] = useState('');

  return (
    <div className="App">
      <h2>Here we will render the Products List</h2>
      <Filter category={category} setCategory={setCategory} />
      <ProductList selectedCategory={category}/>
    </div>
  );
}

export default App;
