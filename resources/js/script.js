function initialize() {
    var center = {lat: 42.2729368, lng: -83.7346785};
    
    var Forest = {
        info: '<h4>Forest Place</h4><br>721 S Forest Ave<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/L8ETMBt7cRA2">View Apartment</a><br><a href="https://goo.gl/maps/ibesHzZJxtVSUM2m6">Get Directions</a>',
        name: 'Forest Place'
    };

    var Abbey = {
        info: '<h4>The Abbey</h4><br>909 Church St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/hrKDVuUX25ZKsnpu7">View Apartment</a><br><a href="https://goo.gl/maps/hrKDVuUX25ZKsnpu7">Get Directions</a>',
        name: 'The Abbey'
    };
    
    var Algonquin = {
        info: '<h4>The Algonquin</h4><br>1330 N University Ct<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/hrKDVuUX25ZKsnpu7">View Apartment</a><br><a href="https://goo.gl/maps/Ye2pLKAjMeeJ5zY67">Get Directions</a>',
        name: 'The Algonquin'
    };
    
    var Dean = {
        info: '<h4>The Dean</h4><br>1021 Vaughn St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/yNKEd8i9bhryzcP8A">View Apartment</a><br><a href="https://goo.gl/maps/yNKEd8i9bhryzcP8A">Get Directions</a>',
        name: 'The Dean'
    };
    
    var Forum = {
        info: '<h4>The Forum</h4><br>726 S State St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/UQriUgjGQVpgESER6">View Apartment</a><br><a href="https://goo.gl/maps/UQriUgjGQVpgESER6">Get Directions</a>',
        name: 'The Forum'
    };
    
    var Lion = {
        info: '<h4>The Lion</h4><br>525 Walnut St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/Bv1wMiYG5UEymf1NA">View Apartment</a><br><a href="https://goo.gl/maps/Bv1wMiYG5UEymf1NA">Get Directions</a>',
        name: 'The Lion'
    };
    
    var Lodge = {
        info: '<h4>The Lodge</h4><br>1333 Wilmot St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/syhwwQdq5XHQtD5cA">View Apartment</a><br><a href="https://goo.gl/maps/syhwwQdq5XHQtD5cA">Get Directions</a>',
        name: 'The Lodge'
    };
    
    var S_Division = {
        info: '<h4>344 S Division</h4><br>344 S Division St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/kMV4t1rWGRzj7rXn9">View Apartment</a><br><a href="https://goo.gl/maps/kMV4t1rWGRzj7rXn9">Get Directions</a>',
        name: '344 S Division'
    };
    
    var S_Division = {
        info: '<h4>344 S Division</h4><br>344 S Division St<br>Ann Arbor, MI 48104<br><a href="https://goo.gl/maps/kMV4t1rWGRzj7rXn9">View Apartment</a><br><a href="https://goo.gl/maps/kMV4t1rWGRzj7rXn9">Get Directions</a>',
        name: '344 S Division'
    };
    
    var locations = [
        [Forest.info, 42.2729368, -83.7346785, Forest.name],
        [Abbey.info, 42.2711901, -83.7363386, Abbey.name]
    ];
        
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center
    });
    
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][3],
            label: (count+1).toString()
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
//        $('.carousel').carousel();
    
    }
);

