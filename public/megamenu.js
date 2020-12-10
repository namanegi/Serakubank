$(function() {
    $('.nav-btn').hover(function() {
        $(this).next().slideDown(200);
        $(this).css('background-color', 'rgb(54, 155, 158)');
    }, function() {
        $(this).next().hide();
        $(this).css('background-color',  'rgb(38,45,123)');
    });
    $('.megamenu').hover(function() {
        $(this).show();
        $(this).prev().css('background-color', 'rgb(54, 155, 158)');
    }, function() {
        $(this).hide();
        $(this).prev().css('background-color',  'rgb(38,45,123)');
    });

    $('#js-small').click(function() {
        $('body').css("font-size", "14px");
    });
    $('#js-medium').click(function() {
        $('body').css("font-size", "16px");
    });
    $('#js-large').click(function() {
        $('body').css("font-size", "18px");
    });
})