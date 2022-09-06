// $(window).scroll(function() {
//     var headerHeight = $(".header").outerHeight();
//     // kiểm tra điều kiện > header thì mới addClass 
//     if ($(window).scrollTop() > headerHeight) {
//         $('.header').addClass('white-bg');
//         // $('.header').addClass('header-sticky');
//         $('.contacthotel').slideUp();
//         $('.header-middle').addClass('animated');
//     } else {
//         $('.header').removeClass('white-bg');
//         // $('.header').removeClass('header-sticky');
//         $('.contacthotel').slideDown();
//         $('.header-middle').removeClass('animated');
//     }
// });
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.banner-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 1
    })

    $('.offer-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 3
    })

    $('.dinner-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 1
    })
    $('.about-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 1
    })


});