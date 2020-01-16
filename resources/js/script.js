$(document).ready(function(){
    var nav = $('.js--main-nav');
    var obtener_ancho = $(window).width();

    $('.js--nav-icon').click(function() {
        var heroText = $('.hero-text-box');

        if (nav.is(':hidden')){
            nav.slideToggle(200);
            heroText.fadeOut(100);
        } else {
            nav.slideToggle(100);
            heroText.fadeIn(200);
        }

    });



});
