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

    $('#checkin').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
        onSelect: function() {
            setdate('checkin', 'from');
        }
    });
    $('#checkout').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
        beforeShow: function() {
            var a = jQuery("#checkin").datepicker('getDate');
            if (a) return {
                minDate: a
            }
        },
        onSelect: function() {
            setdate('checkout', 'to');
        }
    });
    $('#checkin,#checkout').on('focus', function() {
        $(this).blur();
    });
    $('#checkin2').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
    });
    $('#checkout2').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
        beforeShow: function() {
            var a = jQuery("#checkin2").datepicker('getDate');
            if (a) return {
                minDate: a
            }
        }
    });
    $('#checkin2,#checkout2').on('focus', function() {
        $(this).blur();
    });

    $(".booking-form .arrival-date").click(function() {
        $(this).find('.calendar').css("display", "block");
        $('.booking-form .departure-date .calendar').css("display", "none");
    })
    $(".booking-form .departure-date").click(function() {
        $(this).find('.calendar').css("display", "block");
        $('.booking-form .arrival-date .calendar').css("display", "none");
    })

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


});

function setdate(in_out, from_to) {
    var a = $("#" + in_out).datepicker('getDate');
    $("input[name=" + from_to + "day]").val(a.getDate());
    $("input[name=" + from_to + "month]").val(jQuery.datepicker.formatDate("m", a));
    $("input[name=" + from_to + "year]").val(a.getFullYear());
    $("div[id=" + in_out + "month]").html(jQuery.datepicker.formatDate("M", a));
    $("div[id=" + in_out + "date]").html(a.getDate());
    $("div[id=" + in_out + "year]").html(a.getFullYear());
    $("div[id=" + in_out + "]").css("display", "none");
};