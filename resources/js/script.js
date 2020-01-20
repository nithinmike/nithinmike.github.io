$(document).ready(function(){
    var nav = $('.js--main-nav');
    var header_height = $("header").height();
    var nav_height = nav.height();

    // Open/close mobile topnav
    $('.js--nav-icon').click(function() {
        var heroText = $('.hero-text-box');

        if (nav.is(':hidden')){
            heroText.fadeOut(100);
            $('.js-contact-form').fadeOut(100);
            $('.js-apt-section').css('visibility', 'hidden');
            $(".apt-select").css('visibility', 'hidden');
            nav.slideToggle(200, function(){

                if ($("header").height() < (nav.height()+150)) {
                    $("header").height(nav.height()+150);
                }
            });
        } else {
            nav.slideToggle(0);
            heroText.fadeIn(200);
            $('.js-contact-form').fadeIn(200);
            $('.js-apt-section').css('visibility', 'visible');
            $(".apt-select").css('visibility', 'visible');
        }
    });


    // Expand header if phone rotates and topnav is open
    $(window).on('resize', function(){

        if ((header_height < (nav.height()+150)) && (!nav.is(':hidden'))) {
            $("header").height(nav.height()+150);
        }
    });

    $('.js-properties-multiple').select2();
    $( '.swipebox' ).swipebox();



});
