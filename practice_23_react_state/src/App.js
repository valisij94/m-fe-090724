import './App.css';
import SimpleList from './components/SimpleList';
import {SimpleParagraph} from './components/SimpleParagraph';



function App() {

  const firstHandler = (event) => console.log(event.target.textContent);

  return (
    <div className="App">
      <p>Hello World! {new Date().toLocaleString()} </p>
      <SimpleParagraph
        textContent="Hello from updated paragraph!"
        clickHandler={ firstHandler }
      />
      <SimpleList listHeaderText="List Header" listSource={['First', 'Second']} />
      <SimpleList listHeaderText="List Header" />
    </div>
  );
}

export default App;
