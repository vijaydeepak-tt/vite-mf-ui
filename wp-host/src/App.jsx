import React from 'react';
import ReactDOM from 'react-dom/client';

import ButtonModule from 'remoteApp/Button';
import useStore from 'remoteApp/store';
const Button = ButtonModule.default;

import './index.css';

const App = () => {
  const [count] = useStore();
  return (
    <div className="container">
      <Button />
      <div>Count: {count}</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
