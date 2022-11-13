import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// //JSX
// const heading = <h1 className='site-heading'>Hello, React !(JSX)</h1>

// //No JSX
// const heading1 = React.createElement('h1', { className: 'site-heading' }, 'Hello, React using no jsx')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);


