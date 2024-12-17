import { useEffect, useState } from 'react';
import './App.css';
import SimpleList from './components/SimpleList';


function App() {

  const [todos, setTodos] = useState(['Learn HTML', 'Learn CSS', 'Learn JavaScript']);
  const [input, setInput] = useState('');

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  }

  const addTodoHandler = () => {
    if (input.trim()) {
      setTodos( [...todos, input] );
      setInput('');
    }
  }

  const [listShow, setListShow] = useState(true);

  const showHideBtnClickHandler = () => {
    setListShow( !listShow );
  }

  const [current, setCurrent] = useState(new Date().toLocaleString());

  useEffect( () => {
    const intervalId = setInterval( () => {
      setCurrent(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="App">
      <p>{current}</p>
      <input
        type='text'
        onChange={inputChangeHandler}
        placeholder='Todo'
        value={input}
      />
      <button onClick={addTodoHandler}>Add Todo</button>

      <button onClick={showHideBtnClickHandler}>{listShow ? 'Hide list' : 'Show list'}</button>
      { listShow &&
        <SimpleList  listHeaderText={"Simple List Header"} listSource={todos}/>
      }
    </div>
  );
}

export default App;
