import React, { ImgHTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import reportWebVitals from './reportWebVitals';
import Ninja from './assets/Ninja-transparent.png';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    
    {/* <img className="bg-img" src={Ninja}></img> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
