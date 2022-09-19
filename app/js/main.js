$(document).ready(function () {
    "use strict";
    
    $(".header_block_content_drop").click(function() {
        $(this).toggleClass("active");
    });


    $('.people_block_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.explore_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


});