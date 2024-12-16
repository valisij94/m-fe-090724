import { useState } from 'react';
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

  return (
    <div className="App">
      <input
        type='text'
        onChange={inputChangeHandler}
        placeholder='Todo'
        value={input}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
      <SimpleList  listHeaderText={"Simple List Header"} listSource={todos}/>
    </div>
  );
}

export default App;
