import React from 'react';
var menudata = require('./menudata.json');
class TitleWriter extends React.Component {
  render() {
    return (
      <h1>
        {menudata["Menu"+this.props.val].Title}
      </h1>
    )
  }
}
export default TitleWriter;