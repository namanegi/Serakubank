import React from "react";
import "./slide.css";
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
      <img className="slideimg" src={this.imageUrl[i]} alt="" />
    )
  }
  render() {
    var opa = {
      1: 0.3,
      2: 0.3,
      3: 0.3
    };
    opa[this.state.no]=1;
    return (
      <div id="slideshow">
        <img
          src="./arrow_left.png" 
          className="slidearrow" 
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
          className="slidearrow" 
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
          <img className="thumb" id="thumb1" src="./main01_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:1,
            })
          }}
          style={{opacity: opa[1] }}
          > 
          </img>
          <img className="thumb" src="./main02_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:2,
            })
          }}
          style={{opacity: opa[2] }}
          >
          </img>
          <img 
            className="thumb" 
            src="./main03_thumb.png"
            alt=""
            onClick={()=>{this.setState({no:3,})}  }
            style={{opacity: opa[3] }}
          ></img>
        </div>
      </div>
    )
  }
}
export default SlideApp;