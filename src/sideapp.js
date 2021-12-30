import React from 'react';
import "./side.css";
import ModalApp from './modalapp';
class SideApp extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="netbank">
          <h2>インターネットバンキング</h2>
          <p>セラク銀行インターネットバンキング</p>
          <a className="abox" href="/serakubank.build.io/login" id="tologin">ログインサービス</a>
          <a className="abox" href="/serakubank.build.io/signup" id="tosignup">初めてログインする方</a>
          <a href="/serakubank.build.io/forget" id="toforget">＞パスワードを忘れた方はこちら</a>
        </div>
        <div id="guide">
          <h2>サービスのご案内</h2>
            <div id="guidelist">
              <div className="guidebox"><a href="/serakubank.build.io/c1"><br/>店舗<br/>・<br/>ATM検索</a></div>
              <div className="guidebox"><a href="/serakubank.build.io/c2"><br/><br/>資料請求<br/></a></div>
              <div className="guidebox"><a href="/serakubank.build.io/c3"><br/><br/>金利一覧</a></div>
              <div className="guidebox"><a href="/serakubank.build.io/c4"><br/><br/>手数料</a></div>
              <div className="guidebox"><a href="/serakubank.build.io/c5"><br className="half"/><br/>よくある<br/>ご質問</a></div>
              <div className="guidebox"><a href="/serakubank.build.io/c6"><br className="half"/><br/>投資信託基準<br/>価格一覧</a></div>
            </div>
            <a className="abox" href="/serakubank.build.io/acntguide" id="toacntguide">口座開設のご案内</a>
            <a className="abox" href="/serakubank.build.io/apinews" id="tonews">金融経済ニュース</a>
            <a className="abox" href="/serakubank.build.io/safety" id="tosafe">詐欺に注意！！</a>
            <ModalApp value={"テレビCM・動画のご紹介"} />
            <a className="abox" href="/serakubank.build.io/loan" id="toloan">今から考える教育ローン</a>
            <a href="/serakubank.build.io/caution" id="tocaution"><img src="./caution.png" id="cautionimg" alt=""></img></a>
        </div>
      </div>
    )
  }
}

export default SideApp;