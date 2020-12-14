import React from 'react';
var menudata = require('./menudata.json');
class ContentWriter extends React.Component {
  render() {
    var list = [];
    for (var j in menudata["Menu"+this.props.val].Contents) {
      list.push(<li key={j} >{menudata["Menu"+this.props.val].Contents[j]}</li>);
    };
    return list
  }
}
export default ContentWriter;