$(function() {
    const $data = {
        "普通預金": "セラク銀行の普通預金（口座）に関する便利・おトクな使い方をご案内します。本支店ATMでは手数料0円でお引き出し可能。セラク銀行あての振込はインターネットバンキングで手数料0円。インターネットバンキングはワンタイムパスワードで安全にお取引。", 
        "定期預金・積立": "定期預金・積立の案内",
        "外貨預金": "外貨預金の案内",
        "外債": "外債の案内",
        "ファンドラップ": "ファンドラップの案内",
        "個人向け国債": "個人向け国債の案内",
        "退職金運用のご案内": "退職金運用のご案内の案内",
        "資金調達": "資金調達の方法は「負債を増やす」「資本を増やす」「今ある資産を現金にする」の3つです。"
    }
    $('.nav-btn').hover(function() {
        $(this).next().slideDown(400);
        $(this).css('background-color', 'rgb(54, 155, 158)');
    }, function() {
        $(this).next().hide();
        $(this).css('background-color',  'rgb(38,45,123)');
        $('.megacon').hide();
    });
    $('.megamenu').hover(function() {
        $(this).show();
        $(this).prev().css('background-color', 'rgb(54, 155, 158)');
    }, function() {
        $(this).hide();
        $(this).prev().css('background-color',  'rgb(38,45,123)');
        $('.megacon').hide();
    });
    $('.submega').find('li').hover(function() {
        $s_key = $(this).text();
        if ($data[$s_key] !== undefined) {
            $s_con = $data[$s_key];
        } else {
            $s_con = $s_key + "の案内はまだ実装しておりません。";
        };
        $('.megacon').css("display", "inline-flex");
        $('.megacon').find('p').text($s_con);
    }, function() {
        ;
    })
    //change word size
    $('#js-small').click(function() {
        $('body').css("font-size", "14px");
        $('body').css("width", "1000px");
        $('#logo').css("width", "500px");
    });
    $('#js-medium').click(function() {
        $('body').css("font-size", "16px");
        $('body').css("width", "1100px");
        $('#logo').css("width", "600px");
    });
    $('#js-large').click(function() {
        $('body').css("font-size", "18px");
        $('body').css("width", "1200px");
        $('#logo').css("width", "700px");
    });
})