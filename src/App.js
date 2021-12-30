import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SlideApp from './slideapp';
import SideApp from "./sideapp";
import MainApp from "./mainapp";
import IntroWriter from './introwriter';
import LoginApp from "./loginapp";

//以下はAPIを使用しているアプリです
import MapApp from './mapapp';
import APINews from './apinews';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/serakubank.build.io" exact>
            <SlideApp />
            <SideApp />
            <MainApp />
          </Route>

          <Route path="/serakubank.build.io/login">
            <LoginApp />
          </Route>

          <Route path='/serakubank.build.io/i:id' children={<IntroWriter />}>
            <SideApp />
            <IntroWriter />
          </Route>

          <Route path='/serakubank.build.io/c1'>
            <SideApp />
            <MapApp />
          </Route>

          <Route path='/serakubank.build.io/apinews'>
            <SideApp />
            <APINews />
          </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;
