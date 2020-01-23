function initialize() {
    var center = {lat: 42.2729368, lng: -83.7346785};
    var Forest = {
        info: '<h5>Forest Place</h5><br>721 S Forest Ave<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/L8ETMBt7cRA2">View Apartment</a><br><a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',
        name: 'Forest Place'
    };

    var Abbey = {
        info: '<h5>The Abbey</h5><br>721 S Forest Ave<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/L8ETMBt7cRA2">View Apartment</a><br><a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',
        name: 'Forest Place'
    };

    var locations = [
        [Forest.info, 42.2729368, -83.7346785, Forest.name],
        [Abbey.info, 42.2711901, -83.7363386, Abbey.name]
    ];
        
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
    });
    
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][3]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
                infowindow.setContent(locations[count][0]);
                infowindow.open(map, marker);
            }
        })(marker, count));

    }
        
}

function initMap() {
    google.maps.event.addDomListener(window, "load", initialize);
}

$(document).ready(
    function(){
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

        $('.apt-select').change(function () {
            $('.js-apt-div').hide();
            $('.'+$(this).val()).fadeIn();
        });

        $('.js-properties-multiple').select2();
        $( '.swipebox' ).swipebox();
        $('.carousel').carousel();
    
    }
);

