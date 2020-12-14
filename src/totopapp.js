import React from 'react';
import "./totop.css";

class ToTopApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur_pos: 0,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.setState({
      cur_pos: window.pageYOffset,
    })
    );
  }
  render() {
    return (
      <div className="backtotop" onClick={()=>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }}>
        <p>&#11165;</p>
      </div>
    )
  }
}

export default ToTopApp;