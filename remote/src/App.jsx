import { useState } from 'react';
import Button from './Button';
import './App.css';

import useCount from './store';
import Counter from 'hostApp/Counter';

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1>Host Application</h1>
      <Counter />
    </div>
  );
}

export default App;
