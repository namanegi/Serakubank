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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <SlideApp />
            <SideApp />
            <MainApp />
          </Route>

          <Route path="/login">
            <LoginApp />
          </Route>

          <Route path='/c1'>
            <SideApp />
            <MapApp />
          </Route>

          <Route path='/apinews'>
            <SideApp />
            <APINews />
          </Route>

          <Route path='/i:id' children={<IntroWriter />}>
            <SideApp />
            <IntroWriter />
          </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;
