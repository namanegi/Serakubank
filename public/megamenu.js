$(function() {
    $data = {};
    $(document).ready(function() {
        $.getJSON('./megacon.json', (datajson)=>{
            $data = datajson;
        })
    })
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