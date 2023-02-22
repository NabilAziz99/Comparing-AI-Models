import React from 'react';
import './App.css';
import MainFrame from './components/MainFrame';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Comparing AI Models</h1>
      </header>

      <div>
        <MainFrame />
      </div>

      <div>
        <h1>About Each Model</h1>
        <ul>
          <li>
            <h2>Davinci</h2>
            <p>
              ... Info here
            </p>
          </li>
          <li>
            <h2>Curie</h2>
            <p>
              ... Info here
            </p>
          </li>
          <li>
            <h2>Ada</h2>
            <p>
              ... Info here
            </p>
          </li>
          <li>
            <h2>Babbage</h2>
            <p>
              ... Info here
            </p>
          </li>
        </ul>
      </div>

      <div className='footer'>
        <p>
          <i>Created by: Amado Lazo, CJ, Nabil, and Patrick</i>
        </p>
      </div>
    </div>
  );
}

export default App;
