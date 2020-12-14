import React from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import HeaderApp from './headerapp';
import NavApp from './navapp';
import FootApp from "./footer";
import App from "./App"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HeaderApp />,
  document.getElementById('headerroot')
);
ReactDOM.render(
  <App />,
  document.getElementById("content")
)
ReactDOM.render(
  <NavApp />,
  document.getElementById('navroot')
);

ReactDOM.render(
  <FootApp />,
  document.getElementById('footroot')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
