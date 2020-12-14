import React from "react";
import "./nav.css";
import TitleWriter from "./titlewriter";
import ContentWriter from "./contentwriter";
class NavApp extends React.Component {
  render() {
    var list = [];
    for (var i=1;i<=5;i++) {
      list.push(
        <div
          className="nav-btn"
          id={"nav"+i}
          key={"nav"+i}
        >
          <TitleWriter val={i} />
        </div>
      );
      list.push(
        <div
          className="megamenu"
          key={"megamenu"+i}
          id={"megamenu"+i}
        >
          <div className="submega">
          <ul>
            <ContentWriter val={i} />
          </ul>
          </div>
          <div
          className="megacon"
          key={"megacon"+i}
          >
            <p></p>
          </div>
        </div>
      );
    }
    return (
      <div id="navapp">
        {list}
      </div>
    )
  }
}

export default NavApp;