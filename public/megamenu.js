$(function() {
    $('.nav-btn').hover(function() {
        $(this).next().slideDown();
    }, function() {
        $(this).next().stop().hide();
    })
})