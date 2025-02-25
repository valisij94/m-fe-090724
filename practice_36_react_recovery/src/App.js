import './App.css';

import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>This is universal header</h1>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/addProduct'>Add Product</NavLink>
          <NavLink to='/products'>Prodicts</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/addProduct' element={<AddProductPage/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='*' element={<p>There is no page with this route!</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
