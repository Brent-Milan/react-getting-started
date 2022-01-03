import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);
  const incrementCounter = () => setCounter(counter * 2);
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
        <Button counter={counter} incrementCounter={incrementCounter}></Button>
        <Display counter={counter}></Display>
      </div>
    </div>
  );
}

function Button(props) {
  return (
  <button onClick = { props.incrementCounter }>
    +1
  </button>
  )
}

function Display(props) {
  return (
    <div>{props.counter}</div>
  )
}

export default App;
