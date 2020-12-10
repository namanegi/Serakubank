$(function() {
    $('.nav-btn').hover(function() {
        $(this).next().slideDown();
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
})