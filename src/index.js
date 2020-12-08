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

class SlideApp extends React.Component {
  constructor(props) {
    super(props);
    this.imageUrl = {
      "1": "./main01.png",
      "2": "./main02.png",
      "3": "./main03.png"
    };
    this.state = {
      no: 1,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        no: this.state.no + 1,
      });
      if (this.state.no > 3) {
        this.setState({
          no: 1,
        });
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  showImg(i) {
    return (
      <img class="slideimg" src={this.imageUrl[i]} alt="" />
    )
  }

  render() {
    return (
      <div id="slideshow">
        <img
          src="./arrow_left.png" 
          class="slidearrow" 
          id="arrowL" 
          onClick={()=>{
            if (this.state.no === 1) {
              this.setState({
                no: 3,
              });
            } else {
              this.setState({
                no: this.state.no - 1,
              });
            }
          }} 
          alt="" 
        />
        {this.showImg(this.state.no)}
        <img 
          src="./arrow_right.png" 
          class="slidearrow" 
          id="arrowR" 
          onClick={()=>{
            if (this.state.no === 3) {
              this.setState({
                no: 1,
              });
            } else {
              this.setState({
                no: this.state.no + 1,
              });
            }
          }}
          alt="" 
        />
        <div id="thumbs">
          <img class="thumb" src="./main01_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:1,
            })
          }}>
          </img>
          <img class="thumb" src="./main02_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:2,
            })
          }}>
          </img>
          <img class="thumb" src="./main03_thumb.png" alt="" onClick={()=>{this.setState({no:3,})}}></img>
        </div>
      </div>
    )
  }
}

class SideApp extends React.Component {
  render() {
    return (
      <div id="sidebar"></div>
    )
  }
}

class MainApp extends React.Component {
  render() {
    return (
      <div id="maincon"></div>
    )
  }
}
ReactDOM.render(
  <NavApp />,
  document.getElementById('navroot')
);
ReactDOM.render(
  <SlideApp />,
  document.getElementById('slideroot')
);
ReactDOM.render(
  <SideApp />,
  document.getElementById('sideroot')
);
ReactDOM.render(
  <MainApp />,
  document.getElementById('mainroot')
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
