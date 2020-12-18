import React from 'react';
import "./main.css";
import TitleWriter from "./titlewriter";
import ContentWriter from "./contentwriter";

var newsdata = require('./news.json');

class MainApp extends React.Component {
  render() {
    var list = [];
    for (var i=1;i<=4;i++) {
      list.push(
        <div className="mainbox" key={"box"+i} id={"box"+i}>
          <div className="boxtitle" >
            <div className="boxblock"></div>
            <TitleWriter val={i} />
          </div>
          <div className="boxcon">
            <ul>
              <ContentWriter val={i} />
            </ul>
          </div>
        </div>
      )
    };
    return (
      <div id="maincon">
        <div id="boxes">
        {list}
        </div>
        <NewsApp />
      </div>
    )
  }
}
class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "all",
    }
  }
  //タブとthis.state.valが一致する場合にgenre-focusというclassを追加する
  checkFocus(i) {
    if ((i === 1) && (this.state.val === "all")) {
      return "genre genre-focus"
    } else if ((i === 2) && (this.state.val === "news")) {
      return "genre genre-focus"
    } else if ((i === 3) && (this.state.val === "camp")) {
      return "genre genre-focus"
    } else if ((i === 4) && (this.state.val === "notice")){
      return "genre genre-focus"
    } else {
      return "genre"
    }
  }
  //ニュースリストのジャンルアイコンを作成する
  genreWriter(genre) {
    if (genre === "news") {
      return <h5 className="news">ニュースリリース</h5>
    } else if (genre === "camp") {
      return <h5 className="camp">キャンペーン</h5>
    } else if (genre === "notice") {
      return <h5 className="notice">お知らせ</h5>
    } else {
      return <h5>error</h5>
    }
  }
  //お知らせリストの内容を出力
  newsWriter() {
    var list = [];
    for (var i=1;i<=Object.keys(newsdata).length;i++) {
      if ((this.state.val === "all") || (this.state.val === newsdata["news"+i].genre)) {
        list.push(
          <div className="newscon" key={"newscon"+i}>
            <h4>{newsdata["news"+i].time}</h4>
            {this.genreWriter(newsdata["news"+i].genre)}
            <div className="newslink"><a href="/news">{newsdata["news"+i].content}</a></div>
          </div>
        )
      }
    };
    return list
  }
  render() {
    return (
      <div id="newslist">
        <div id="genres">
          <div className={this.checkFocus(1)} id="genre1" onClick={()=>{
            this.setState({
              val: "all",
            })
          }}>新着情報</div>
          <div className={this.checkFocus(2)} id="genre2" onClick={()=>{
            this.setState({
              val: "news",
            })
          }}>ニュースリリース</div>
          <div className={this.checkFocus(3)} id="genre3" onClick={()=>{
            this.setState({
              val: "camp",
            })
          }}>キャンペーン</div>
          <div className={this.checkFocus(4)} id="genre4" onClick={()=>{
            this.setState({
              val: "notice",
            })
          }}>お知らせ</div>
        </div>
        <div id="newscons">
          {this.newsWriter()}
        </div>
      </div>
    )
  }
}

export default MainApp;