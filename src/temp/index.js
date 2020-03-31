import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

function MyApp() {

  return(
    <ul>
      <li>aphrodite</li>
      <li>zeus</li>
      <li>electra</li>
    </ul>
  )
}

ReactDom.render(<MyApp />,document.getElementById('root'));


