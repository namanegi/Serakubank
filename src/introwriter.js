import React from "react";
import { useParams } from "react-router-dom";

import SideApp from "./sideapp";

var introdata = require('./introduction.json');

function IntroWriter() {
  let { id } = useParams();
  id = 'i' + id;
  let list = [];
  try {
    list.push(
      <h1>{introdata[id].Title + "についての説明"}</h1>
    );
    for (var i in introdata[id].Intro) {
      list.push(
        <p key={i}>{introdata[id].Intro[i]}</p>
      )
    }
  } catch {
    list.push(
      <h1>このコンテンツはまだ実装されておりません。</h1>
    )
  }
  
  return (
    <React.Fragment>
    <SideApp />
    <div id="maincon">
      {list}
      <div>
        <a href="/">ホームページに戻る</a>
      </div>
    </div>
  </React.Fragment>
    
  )
}

export default IntroWriter;