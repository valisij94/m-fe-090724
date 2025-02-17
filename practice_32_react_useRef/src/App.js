import { useContext, useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from './context/themeContext/ThemeContext';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {

  const { toggleTheme } = useContext(ThemeContext);

  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const containerRef = useRef(null);
  const counterRef = useRef(0);

  useEffect( () => {
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
    if (containerRef.current) {
      console.log(`Container has ${containerRef.current.offsetWidth}px width, ${containerRef.current.offsetHeight}px height`);
    }
  }, []);

  const handleBtnFirstClick = () => {
    if (firstInputRef.current && secondInputRef.current)
      console.log(firstInputRef.current.value, secondInputRef.current.value)
  }

  const counterClickHandler = () => {
    counterRef.current += 1;
    console.log('Counter is', counterRef.current);
  }

  const handleChangeColor = () => {
    const colors = ['red', 'green', 'blue'];
    const currentBGColor = containerRef.current.style.backgroundColor;
    const currentIndex = colors.indexOf(currentBGColor);
    const nextIndex = currentIndex === colors.length - 1 ? 0 : currentIndex + 1;
    containerRef.current.style.backgroundColor = colors[nextIndex];
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

        <h2>Some dummy inputs for checking refs</h2>
        <div ref={containerRef} style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <input ref={firstInputRef} type='text' value={firstInput} name='firstInput' onChange={ (e) => setFirstInput(e.target.value) }/>
          <input ref={secondInputRef} type='text' value={secondInput} name='secondInput' onChange={ (e) => setSecondInput(e.target.value) }/>
          <button onClick={handleBtnFirstClick}>Click me</button>
          <button onClick={counterClickHandler}>Click me counter</button>
          <button onClick={handleChangeColor}>Change color</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;