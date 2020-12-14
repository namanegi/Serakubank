import React from 'react';
import SlideApp from './slideapp';
import SideApp from "./sideapp";
import MainApp from "./mainapp";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SlideApp />
        <SideApp />
        <MainApp />
      </React.Fragment>
    )
  }
}

export default App;
