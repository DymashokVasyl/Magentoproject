define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    var backTop = $('#back__top'),
        header = $('.header.content');


    let scrolledBool = true;

        $(window).scroll(function () {
            // Header Sticky
            if ($(this).scrollTop() > header.outerHeight() && $(this).width() >=768) {
                header.addClass('fixed');
                $('.page-wrapper').css("marginTop", header.outerHeight());
            }
            if ($(this).scrollTop() === 0 ){
                header.removeClass('fixed');
                $('.page-wrapper').css("marginTop","0");
            }
            
            // console.log(header.outerHeight());


            // Back To Top
            if ($(this).scrollTop() > 100 & scrolledBool) {
                scrolledBool = false;
                backTop.fadeIn();

            }
            if ($(this).scrollTop() < 100 & !scrolledBool) {
                scrolledBool = true;
                backTop.fadeOut();

            }
        });

        backTop.click(() => {
            $('html').animate({
                scrollTop: 0,
            }, 500);
        });

        
});
