import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import HeaderApp from './headerapp';
import ModalApp from './modalapp'
import reportWebVitals from './reportWebVitals';

var menudata = require('./menudata.json');
var newsdata = require('./news.json');

ReactDOM.render(
  <HeaderApp />,
  document.getElementById('headerroot')
);

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
            <p>セラク銀行の普通預金（口座）に関する便利・
              おトクな使い方をご案内します。
              本支店ATMでは手数料0円でお引き出し可能。
              セラク銀行あての振込はインターネットバンキングで手数料0円。
              インターネットバンキングはワンタイムパスワードで安全にお取引。
              </p>
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

class SlideApp extends React.Component {
  constructor(props) {
    super(props);
    this.imageUrl = {
      "1": "./main01.png",
      "2": "./main02.png",
      "3": "./main03.png"
    };
    this.state = {
      no: 1,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        no: this.state.no + 1,
      });
      if (this.state.no > 3) {
        this.setState({
          no: 1,
        });
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  showImg(i) {
    return (
      <img className="slideimg" src={this.imageUrl[i]} alt="" />
    )
  }
  render() {
    var opa = {
      1: 0.4,
      2: 0.4,
      3: 0.4
    };
    opa[this.state.no]=1;
    return (
      <div id="slideshow">
        <img
          src="./arrow_left.png" 
          className="slidearrow" 
          id="arrowL" 
          onClick={()=>{
            if (this.state.no === 1) {
              this.setState({
                no: 3,
              });
            } else {
              this.setState({
                no: this.state.no - 1,
              });
            }
          }} 
          alt="" 
        />
        {this.showImg(this.state.no)}
        <img 
          src="./arrow_right.png" 
          className="slidearrow" 
          id="arrowR" 
          onClick={()=>{
            if (this.state.no === 3) {
              this.setState({
                no: 1,
              });
            } else {
              this.setState({
                no: this.state.no + 1,
              });
            }
          }}
          alt="" 
          style={{opacity: opa[2] }}
        />
        <div id="thumbs">
          <img className="thumb" id="thumb1" src="./main01_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:1,
            })
          }}
          style={{opacity: opa[1] }}
          > 
          </img>
          <img className="thumb" src="./main02_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:2,
            })
          }}
          style={{opacity: opa[2] }}
          >
          </img>
          <img 
            className="thumb" 
            src="./main03_thumb.png"
            alt=""
            onClick={()=>{this.setState({no:3,})}  }
            style={{opacity: opa[3] }}
          ></img>
        </div>
      </div>
    )
  }
}

class SideApp extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="netbank">
          <h2>インターネットバンキング</h2>
          <p>セラク銀行インターネットバンキング</p>
          <a className="abox" href="/login" id="tologin">ログインサービス</a>
          <a className="abox" href="/signup" id="tosignup">初めてログインする方</a>
          <a href="/forget" id="toforget">＞パスワードを忘れた方はこちら</a>
        </div>
        <div id="guide">
          <h2>サービスのご案内</h2>
            <div id="guidelist">
              <div className="guidebox"><a href="/c1"><br/>店舗<br/>・<br/>ATM検索</a></div>
              <div className="guidebox"><a href="/c2"><br/><br/>資料請求<br/></a></div>
              <div className="guidebox"><a href="/c3"><br/><br/>金利一覧</a></div>
              <div className="guidebox"><a href="/c4"><br/><br/>手数料</a></div>
              <div className="guidebox"><a href="/c5"><br className="half"/><br/>よくある<br/>ご質問</a></div>
              <div className="guidebox"><a href="/c6"><br className="half"/><br/>投資信託基準<br/>価格一覧</a></div>
            </div>
            <a className="abox" href="/acntguide" id="toacntguide">口座開設のご案内</a>
            <a className="abox" href="/news" id="tonews">金融経済ニュース</a>
            <a className="abox" href="/safety" id="tosafe">詐欺に注意！！</a>
            <ModalApp value={"テレビCM・動画のご紹介"} />
            <a className="abox" href="/loan" id="toloan">今から考える教育ローン</a>
            <a href="/caution" id="tocaution"><img src="./caution.png" id="cautionimg" alt=""></img></a>
        </div>
      </div>
    )
  }
}

class TitleWriter extends React.Component {
  render() {
    return (
      <h1>
        {menudata["Menu"+this.props.val].Title}
      </h1>
    )
  }
}
class ContentWriter extends React.Component {
  render() {
    var list = [];
    for (var j in menudata["Menu"+this.props.val].Contents) {
      list.push(<li key={j} >{menudata["Menu"+this.props.val].Contents[j]}</li>);
    };
    return list
  }
}

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



ReactDOM.render(
  <NavApp />,
  document.getElementById('navroot')
);
ReactDOM.render(
  <SlideApp />,
  document.getElementById('slideroot')
);
ReactDOM.render(
  <SideApp />,
  document.getElementById('sideroot')
);
ReactDOM.render(
  <MainApp />,
  document.getElementById('mainroot')
);
ReactDOM.render(
  <FootApp />,
  document.getElementById('footroot')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
