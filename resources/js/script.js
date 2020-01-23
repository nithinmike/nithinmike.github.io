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

    $('.apt-select').change(function () {
        $('.js-apt-div').hide();
        $('.'+$(this).val()).fadeIn();
    });

    $('.js-properties-multiple').select2();
    $( '.swipebox' ).swipebox();
    $('.carousel').carousel();
    
    
    
    function initMap() {
        var center = {lat: 34.052235, lng: -118.243683};  
        var locations = [
    ['Philz Coffee<br>\
    801 S Hope St A, Los Angeles, CA 90017<br>\
   <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',   34.046438, -118.259653],
    ['Philz Coffee<br>\
    525 Santa Monica Blvd, Santa Monica, CA 90401<br>\
   <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>', 34.017951, -118.493567],
    ['Philz Coffee<br>\
    146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
    <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 34.143073, -118.132040],
    ['Philz Coffee<br>\
    21016 Pacific Coast Hwy, Huntington Beach, CA 92648<br>\
    <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>', 33.655199, -117.998640],
    ['Philz Coffee<br>\
    252 S Brand Blvd, Glendale, CA 91204<br>\
   <a href="https://goo.gl/maps/WDr2ef3ccVz">Get Directions</a>', 34.142823, -118.254569]
    ];
        
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
    });
    
    var infowindow =  new google.maps.InfoWindow({});var marker, count;for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0]
        });
        
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
        }
    })(marker, count));
  }
        
}

});
