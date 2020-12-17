import React from 'react';
var menudata = require('./menudata.json');
class ContentWriter extends React.Component {
  render() {
    var list = [];
    for (var j in menudata["Menu"+this.props.val].Contents) {
      list.push(<a href={"/i" + this.props.val + j} key={j}><li key={j} >{menudata["Menu"+this.props.val].Contents[j]}</li></a>);
    };
    return list
  }
}
export default ContentWriter;