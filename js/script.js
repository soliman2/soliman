$(function () {
    "use strict";
    $(".sidpar .menu li a").on('click', function () {
        $(".sidpar a").removeClass("active");
        $(this).addClass("active");

    });


    $(".work ul li").on('click', function () {
        $(".work li").removeClass("select");
        $(this).addClass("select");

    });

    //Smoth Scrool
    $(".sidpar .menu li a").on('click', function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });

    //scroll toadd class active
//    $(window).scroll(function () {
//        $("section") each(function () {
//            if ($(window).scrollTop > $(this).offset().top) {
//                var block = $(this).attr('id');
//
//                $(".sidpar .menu li a").removeClass("active");
//                $('.sidpar .menu li a[data-scroll="' + block + '"]').addClass("active";)
//            }
//        });
//    });

});
