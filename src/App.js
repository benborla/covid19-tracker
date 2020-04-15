import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Covid19 } from './features/covid19/Covid19'
import './App.css';
import { fetchData } from './api/covid19'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Covid19 />
          {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
