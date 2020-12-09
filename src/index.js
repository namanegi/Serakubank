import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import HeaderApp from './headerapp';
import reportWebVitals from './reportWebVitals';

var data = {
  "test": "hello world",
  "check": "It's ok"
}

ReactDOM.render(
  <HeaderApp />,
  document.getElementById('headerroot')
);

class NavApp extends React.Component {
  render() {
    return (
      <div id="navapp">
        <div class="nav-btn" id="nav1">
            <h2>個人のお客様</h2>
            
        </div>
        <div class="nav-btn" id="nav2"><h2>法人のお客様</h2></div>
        <div class="nav-btn" id="nav3"><h2>株主・投資家の皆様</h2></div>
        <div class="nav-btn" id="nav4"><h2>採用情報</h2></div>
        <div class="nav-btn" id="nav5"><h2>せらく銀行について</h2></div>
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
      <img class="slideimg" src={this.imageUrl[i]} alt="" />
    )
  }

  render() {
    return (
      <div id="slideshow">
        <img
          src="./arrow_left.png" 
          class="slidearrow" 
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
          class="slidearrow" 
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
        />
        <div id="thumbs">
          <img class="thumb" src="./main01_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:1,
            })
          }}>
          </img>
          <img class="thumb" src="./main02_thumb.png" alt="" onClick={()=>{
            this.setState({
              no:2,
            })
          }}>
          </img>
          <img class="thumb" src="./main03_thumb.png" alt="" onClick={()=>{this.setState({no:3,})}}></img>
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
          <a class="abox" href="/login" id="tologin">ログインサービス</a>
          <a class="abox" href="/signup" id="tosignup">初めてログインする方</a>
          <a href="/forget" id="toforget">＞パスワードを忘れた方はこちら</a>
        </div>
        <div id="guide">
          <h2>サービスのご案内</h2>
            <div id="guidelist">
              <div class="guidebox"><a href="/c1"><br/>店舗<br/>・<br/>ATM検索<br/></a></div>
              <div class="guidebox"><a href="/c2"><br/><br/>資料請求<br/></a></div>
              <div class="guidebox"><a href="/c3"><br/><br/>金利一覧</a></div>
              <div class="guidebox"><a href="/c4"><br/><br/>手数料</a></div>
              <div class="guidebox"><a href="/c5"><br class="half"/><br/>よくある<br/>ご質問</a></div>
              <div class="guidebox"><a href="/c6"><br class="half"/><br/>投資信託基準<br/>価格一覧</a></div>
            </div>
            <a class="abox" href="/acntguide" id="toacntguide">口座開設のご案内</a>
            <a class="abox" href="/news" id="tonews">金融経済ニュース</a>
            <a class="abox" href="/safety" id="tosafe">詐欺に注意！！</a>
            <a class="abox" href="/cm" id="tocm">テレビCM・動画のご紹介</a>
            <a class="abox" href="/loan" id="toloan">今から考える教育ローン</a>
            <a href="/caution" id="tocaution"><img src="./caution.png" id="cautionimg" alt=""></img></a>
        </div>
      </div>
    )
  }
}

class DataWriter extends React.Component {

  render() {
    return (
      <h1>
        {data["test"]}
      </h1>
    )
  }
}

class MainApp extends React.Component {
  render() {
    return (
      <div id="maincon">
        <DataWriter />
      </div>
    )
  }
}

class FootApp extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="ftext">
        <ul id="f1">
            <h1>個人のお客様</h1>
                    <li>普通預金</li>
                    <li>定期預金・積立</li>
                    <li>外貨預金</li>
                    <li>外債</li>
                    <li>ファンドラップ</li>
                    <li>個人向け国債</li>
                    <li>退職金運用のご案内</li>
        </ul>

        <ul id="f2">
            <h1>法人のお客様</h1>
                    <li>資金調達</li>
                    <li>国際業務・為替取引</li>
                    <li>福利厚生</li>
                    <li>事業戦略・経営相談</li>
                    <li>振込み・入金確認の効率化</li>
                    <li>電子記録債権・手形関連</li>
        </ul>

        <ul id="f3">
            <h1>株主・投資家の皆様</h1>
                    <li>せらくグループの概要</li>
                    <li>決算広告</li>
                    <li>社債情報</li>
        </ul>

        <ul id="f4">
            <h1>採用情報</h1>
                    <li>新卒採用</li>
                    <li>キャリア採用</li>
                    <li>海外現地採用</li>
                    <li>契約社員のお仕事</li>
                    <li>派遣社員のお仕事</li>
        </ul>

        <ul id="f5">
            <h1>せらく銀行について</h1>

                    <li>ご挨拶</li>
                    <li>事業内容</li>
                    <li>企業の社会的責任</li>
                    <li>役員一覧</li>
                    <li>組織体制</li>
                    <li>お問い合わせ先</li>
        </ul>
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
