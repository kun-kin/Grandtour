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
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            991: {
                items: 3
            }
        }
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


    $('.slide__room__image').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ["<i class='fa-thin fa-chevron-left'></i>", "<i class='fa-thin fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            820: {
                items: 1
            },
            1300: {
                items: 1
            }
        }
    })

    $(".contact").click(function() {
        $(".contact__modal").css("visibility", "visible");
        $(".contact__modal").css("opacity", "1");
        $(".main__contact__modal").css("margin", "30px auto");
    })
    $(".close__form").click(function() {
        $(".contact__modal").css("visibility", "hidden");
        $(".contact__modal").css("opacity", "0")
        $(".main__contact__modal").css("margin", "10px auto");
    })

    $(".nav-toggle").click(function() {
            $(".navbar-collapse").slideToggle();

        })
        // $("#offer-view").click(function() {
        //     $(this).addClass('view');
        //     $(".offer-modal-detail").toggleClass('show');

    // })


});