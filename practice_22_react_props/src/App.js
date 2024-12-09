import './App.css';
import LoginForm from './components/LoginForm';
import {SimpleParagraph} from './components/SimpleParagraph';



function App() {
  return (
    <div className="App">
      <p>Hello World! {new Date().toLocaleString()} </p>
      <SimpleParagraph />
      <LoginForm />
    </div>
  );
}

export default App;
