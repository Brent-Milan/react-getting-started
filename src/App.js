import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementFunction = (increment) => setCounter(counter + increment);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Button increment={1} incrementFunction={incrementFunction}></Button>
        <Button increment={5} incrementFunction={incrementFunction}></Button>
        <Button increment={10} incrementFunction={incrementFunction}></Button>
        <Display counter={counter}></Display>
      </div>
    </div>
  );
}

function Button(props) {
  return (
  <button onClick = { () => props.incrementFunction(props.increment) }>
    +{ props.increment }
  </button>
  )
}

function Display(props) {
  return (
    <div>{props.counter}</div>
  )
}

export default App;
