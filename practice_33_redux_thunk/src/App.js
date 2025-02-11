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
  const dispatch = useDispatch();

  const counter = useSelector( state => state.counter.value);

  const incrementClickHandler = () => {
    dispatch( increment() );
  }
  const decrementClickHandler = () => {
    dispatch( decrement() );
  }
  const incByAmount = () => {
    dispatch( incrementByAmount(+inputValue) );
  }

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

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

        <p>Now counter is: {counter}</p>
        <input type='text' value={inputValue} onChange={handleInputChange}/>
        <button onClick={incrementClickHandler}>Increment</button>
        <button onClick={decrementClickHandler}>Decrement</button>
        <button onClick={incByAmount}>Inc by amount</button>
      </div>
    </BrowserRouter>
  );
}

export default App;