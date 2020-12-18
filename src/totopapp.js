import React from 'react';
import "./totop.css";

class ToTopApp extends React.Component {
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