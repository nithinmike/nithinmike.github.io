$(document).ready(function(){
    var nav = $('.js--main-nav');
    var obtener_ancho = $(window).width();
    var header_height = $("header").height();

    $('.js--nav-icon').click(function() {
        var heroText = $('.hero-text-box');

        if (nav.is(':hidden')){
            heroText.fadeOut(100);
            nav.slideToggle(200, function(){
                header_height = $("header").height();
                var nav_height = nav.height();

                if (header_height < nav_height) {
                    $("header").animate({
                        height: nav_height+150
                    }, 200);
                    //$("header").height(nav_height + 150);
                }
            });
        } else {
            //$("header").height('');
            nav.slideToggle(100);
            heroText.fadeIn(200);
        }

    });

});
