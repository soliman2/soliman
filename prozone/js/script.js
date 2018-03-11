jQuery(document).ready(function ($) {
    "use strict";
    /*********************************Start Home Page*********************************/

    //////////////////////////////Header Bg/////////////////////////////

    //////////////Header Slider////////////

    $(".header-slider").slick({
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 5000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        dots: true, // Enable or Disable Bullets
        arrows: true, // Enable or Disable Arrows
        responsive: [ // Responsive Breack Points
            {
                breakpoint: 1030,
                settings: {
                    arrows: false,
                }
            }
    ],
    });

    // Header Search Button 
    $(".button-searsh").click(function () {
        $(".input-searsh").fadeToggle();
    });

    ////////////// Header Cart Button 
    $(".button-cart").click(function () {
        $(".cart-down").fadeToggle();
    });

    ////////////// Header Cart Rmove Element 
    $(".remove-element").click(function () {
        $(".iteam").remove();
    });

    /////////////////////////////Section Of Servesec///////////////////////////////

    ////////Add Class Active To Target Link
    $(".servese .servese-tabs .tabs li:first-child").addClass("active");
    $(".servese .servese-tabs .tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");


        //Hide All Content
        $(".servese .servese-tabs .tab > div").hide();

        //Show Dive With This Link
        $('.' + $(this).data('class')).show(1000);
    });
    /////Single Slider In Mobile
    $(".single-slider").slick({
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 5000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        dots: true, // Enable or Disable Bullets
        arrows: true, // Enable or Disable Arrows
    });




    /////////////////////////////Section Of About Us///////////////////////////////

    ////////Add Class Active To Target Link
    $(".about-us .about ul li").addClass("selected");
    $(".about-us .about ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");

        //Hide All Content Paragraph
        $(".about-us .about .about-block > div ").hide();

        //Hide All Content Image Block
        $(".about-us .img-block > div ").hide();

        //Show Dive With This Link
        $('.' + $(this).data('class')).fadeIn(2000);
    });


    /////////////////////////////Section Of Events ///////////////////////////////


    $(".carousel-slider").slick({
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 5000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        slidesToShow: 3, // Number of the visible slides in desktops
        slidesToScroll: 1, // Slide's Number To Scroll
        responsive: [ // Responsive Breack Points

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Number of the visible slides in Tablets
                }
            },

            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1, // Number of the visible slides in Mobile
                }
            },
    ],
        dots: true, // Enable or Disable Bullets
    });


    /////////////////////////////Section Of Courses ///////////////////////////////
    $(".courses-slider").slick({
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 5000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        slidesToShow: 1, // Number of the visible slides in desktops
        slidesToScroll: 1, // Slide's Number To Scroll
        responsive: [ // Responsive Breack Points
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1, // Number of the visible slides in Tablets
                }
            },

            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1, // Number of the visible slides in Mobile
                }
            },
    ],
    });

    /////////////////////////////Section Of Trainers ///////////////////////////////
    $(".trainers-slider").slick({
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 500000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        slidesToShow: 4, // Number of the visible slides in desktops
        slidesToScroll: 1, // Slide's Number To Scroll
        arrows: true, // Enable or Disable Arrows

        responsive: [ // Responsive Breack Points
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Number of the visible slides in Tablets
                }
            },

            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1, // Number of the visible slides in Mobile
                }
            },
    ],
    });
    /*********************************End Home Page*********************************/

    /*********************************Start Book Event Page*********************************/
    ////////Add Class Active To Target Link
    $(".event-info .tabs>ul li:first-child").addClass("active");
    $(".event-info .tabs>ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        //Hide All Content Paragraph
        $(".event-info .tabs .tabs-block>div ").hide();


        //Show Dive With This Link
        $('.' + $(this).data('class')).fadeIn(2000);
    });

    /*********************************End Book Event Page*********************************/

    /*********************************Start Product Info Page*********************************/
    ////////Add Class Active To Target Link
    $(".gallery-slider").slick({
        //rtl:true,
        autoplay: true, // Enables Autoplay
        autoplaySpeed: 5000, // Autoplay Speed in milliseconds
        speed: 500, // Transition Speed In Milliseconds
        asNavFor: ".gallery-thumbnails", // Slider Sync.
    });

    $(".gallery-thumbnails").slick({
        //rtl:true,
        asNavFor: ".gallery-slider", // Slider Sync.
        focusOnSelect: true, // on Click Sync.
        slidesToShow: 3, // Number of the visible slides in desktops
        slidesToScroll: 1, // Slide's Number To Scroll
    });
    /*********************************End Product Info Page*********************************/


    /*********************************Size Button****************************************/

    ////////Add Class Active To Target Link
    $(".product .product-info .option .size >button:first-child").addClass("active");
    $(".product .product-info .option .size >button").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    /*********************************End Product Info Page*********************************/


});
