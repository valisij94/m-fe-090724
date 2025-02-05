import { useContext, useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from './context/themeContext/ThemeContext';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

import { increment, decrement, incrementByAmount } from './store/slices/counterSlice';

function App() {

  const { toggleTheme } = useContext(ThemeContext);

  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');

  return (
    <BrowserRouter>
      <div className="App">

        <button onClick={toggleTheme}>Toggle Theme</button>
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
          <Route path='/products/:productId' element={<ProductDetailPage/>} />
          <Route path='*' element={<p>There is no page with this route!</p>} />
        </Routes>

        <h2>Some dummy inputs for checking refs</h2>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <input type='text' value={firstInput} name='firstInput' onChange={ (e) => setFirstInput(e.target.value) }/>
          <input type='text' value={secondInput} name='secondInput' onChange={ (e) => setSecondInput(e.target.value) }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;