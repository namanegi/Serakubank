import React from 'react';
import "./headerapp.css";

class HeaderApp extends React.Component {
    render() {
    return (
        <div className="headerapp">
            <header id="top">
                <div id="logo"><img id="logo-img" src="./logo.png" alt="" /></div>
                <div id="code">金融機関コード：0917</div>
                <div id="mojisize">文字サイズ：</div>
                <div className="ch-moji-size"><img id="js-small" src="./fontsize_s.png" alt="" /></div>
                <div className="ch-moji-size"><img id="js-medium" src="./fontsize_m.png" alt="" /></div>
                <div className="ch-moji-size"><img id="js-large" src="./fontsize_l.png" alt="" /></div>
                <div id="map">
                    <ul>
                        <li><a href="/">global site</a></li>
                        <li><a href="/">site map</a></li>
                    </ul>
                </div>
                <div id="search-bar">
                    <form action="" method="post">
                        <input type="search" name="search" id="search-input" placeholder="検索ワードを入力" />
                        <input type="image" src="./search.png" name="submit" id="search-button" alt="" />
                    </form>
                </div>
            </header>
        </div>
    );
    }
}

export default HeaderApp;