import "./modal.css";
import React from 'react';
class ModalApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            on: 0,
        }
    }
    render() {
        if (this.state.on === 0) {
          return (
            <button className="bbox" id="tocm" onClick={()=>{
                this.setState({
                  on: 1,
                })
              }}>
              {this.props.value}
            </button>
          )
        } else if (this.state.on === 1) {
          return (
            <React.Fragment>
              <button className="bbox" id="tocm" onClick={()=>{
                this.setState({
                  on: 1,
                })
              }}>テレビCM・動画のご紹介
            </button>
            <div className="modal-bg" onClick={()=>{
                this.setState({
                  on: 0,
                })
            }}>
              <div className="modal-con">
                <iframe title="CM" width="100%" height="100%" src="https://www.youtube.com/embed/cIA6d86gAkk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            </React.Fragment>
          )
        };
    }
}

export default ModalApp;