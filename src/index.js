import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import HeaderApp from './headerapp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HeaderApp />,
  document.getElementById('headerroot')
);

class NavApp extends React.Component {
  render() {
    return (
      <div id="navapp">
        <div class="nav-btn" id="nav1">
            <h2>menu1</h2>
            
        </div>
        <div class="nav-btn" id="nav2"><h2>menu2</h2></div>
        <div class="nav-btn" id="nav3"><h2>menu3</h2></div>
        <div class="nav-btn" id="nav4"><h2>menu4</h2></div>
        <div class="nav-btn" id="nav5"><h2>menu5</h2></div>
      </div>
    )
  }
}

ReactDOM.render(
  <NavApp />,
  document.getElementById('nav-bar')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
