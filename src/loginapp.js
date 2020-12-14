import React from "react";
import "./login.css"

class LoginApp extends React.Component {
  render() {
    return (
      <div id="loginbox">
      <form action="/chkpwd" method="POST">
        <table>
          <tr>
            <td className="label" id="usr-label">ユーザー名:</td>
            <td colSpan="2"><input type="text" id="usr" name="usr" placeholder="ユーザー名を入力してください"></input></td>
          </tr>
          <tr>
            <td className="label" id="pwd-label">パスワード：</td>
            <td colSpan="2"><input type="password" id="pwd" name="pwd" placeholder="パスワードを入力してください"></input></td>
          </tr>
          <tr>
            <td colSpan="3"><button type="submit">ログイン</button></td>
          </tr>
          <tr>
            <td colSpan="3"><a href="/forget" id="toforget">＞パスワードを忘れた方はこちら</a></td>
          </tr>
        </table>
      </form>
      </div>
    )
  }
}

export default LoginApp;