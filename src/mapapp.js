import React from "react";
import SideApp from "./sideapp";

class MapApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideApp />
        <div id="maincon">
          <iframe id="mapifr" title="OpenStreetMap" frameborder="0" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=139.6736526489258%2C35.55178129792759%2C140.24700164794925%2C35.80639817547936&amp;layer=mapnik"></iframe>
        </div>
      </React.Fragment>
      
    )
  }
}

export default MapApp;