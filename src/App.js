import React from 'react';

import SlideApp from './slideapp';
import SideApp from "./sideapp";
import MainApp from "./mainapp";
import IntroWriter from './introwriter';

import LoginApp from "./loginapp";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MapApp from './mapapp';
import APINews from './apinews';

class Index extends React.Component {
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
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/login">
            <LoginApp />
          </Route>
          <Route path='/c1'>
            <MapApp />
          </Route>
          <Route path='/apinews'>
            <APINews />
          </Route>
          <Route path='/i:id' children={<IntroWriter />}>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
