import React from 'react';
import TitleWriter from "./titlewriter";
import ContentWriter from "./contentwriter";
import "./footer.css";

class FootApp extends React.Component {
  render() {
    var list = [];
    for (var i=1;i<=5;i++) {
      list.push(
        <ul key={"f"+i} id={"f"+i}>
            <TitleWriter val={i} />
            <ContentWriter val={i} /> 
        </ul>
      )
    };
    return (
      <div id="footer">
        <div id="ftext">
          {list}
        </div>
        <div id="hai">
          <div id="fmoji">
            <p id="fa">|</p>
            <p id="fu1">お客様の個人情報所得について</p>
            <p id="fb">|</p>
            <p id="fu2">金融商品勧誘方針</p>
            <p id="fc">|</p>
            <p id="fu3">法人等のお客様の情報について</p>
            <p id="fd">|</p>
            <p id="fu4">本サイトのご利用に当たって</p>
            <p id="fe">|</p>
            <p id="fu5">反社会的勢力に対する基本方針</p>
            <p id="ff">|</p>
          </div>
        </div>
        <p id="copyright">
          <small>Copyright(c)2020 Seraku Banking Corporation. ALL rights reserved.</small>
        </p>
      </div>
    )
  }
}

export default FootApp;