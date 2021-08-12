/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    const backTop = $('#back__top');
    const header = $('.header.content')

        $(window).scroll(function () {
            // Header Sticky
            if ($(this).scrollTop() > header.outerHeight() && $(this).width() >=768) {
                header.addClass('fixed');
            }
            if ($(this).scrollTop() === 0 ){
                header.removeClass('fixed');
            }
            // console.log(header.outerHeight());


            // Back To Top
            if ($(this).scrollTop() > 100) {
                backTop.fadeIn();

            }
            if ($(this).scrollTop() < 100 ) {
                backTop.fadeOut();

            }
        });

        backTop.click(() => {
            $('html').animate({
                scrollTop: 0,
            }, 500);
        });

        
});
