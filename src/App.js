import React from 'react';
import { Covid19 } from './features/covid19/Covid19'
import './App.css';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Covid19 />
             <Button variant="contained" color="primary">
      Hello World
    </Button>
      </header>
    </div>
  );
}

export default App;
