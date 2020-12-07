function HeaderApp() {
    return (
        <div class="headerapp">
            <header id="top">
                <div id="logo"><img src="./logo.png" /></div>
                <div id="code">金融機関コード：0917</div>
                <div id="mojisize">文字サイズ：</div>
                <div class="ch-moji-size"><img src="./fontsize_s.png" /></div>
                <div class="ch-moji-size"><img src="./fontsize_m.png" /></div>
                <div class="ch-moji-size"><img src="./fontsize_l.png" /></div>
                <div id="map">
                    <ul>
                        <li><a href="">global site</a></li>
                        <li><a href="">site map</a></li>
                    </ul>
                </div>
                <div id="search-bar">
                    <form action="" method="post">
                        <input type="search" name="search" id="search-input" placeholder="検索ワードを入力"></input>
                        <input type="image" src="./search.png" name="submit" id="search-button"></input>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default HeaderApp;