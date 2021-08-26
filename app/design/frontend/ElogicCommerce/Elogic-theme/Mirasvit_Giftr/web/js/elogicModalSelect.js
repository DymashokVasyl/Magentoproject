define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.selectmodal', {
        options: {
            selector: '',
            inputs:''
        },

        _create: function () {
            var selector = this.options.selector,
                inputs = this.options.inputs;

            $(document).on('click', selector, function () {

                let menu = $(this);

                if (!menu.hasClass('open')) {
                    menu.addClass('open');
                }
            });

            $(document).on('click', `${selector} > ul > li `, function (e) {

                $(`${inputs} input`).each(function () {
                    $(this).prop('checked', false);
                });

                let li = $(this),
                    menu = li.parent().parent(),
                    index = li.index();

                $(`${selector} ul`).css('transform', `translateY(${index*-41}px)`);

                $(`${inputs} input#registry_${index+1}`).attr('checked', true);

                setTimeout(() => {
                    menu.removeClass('open tilt-up tilt-down');
                }, 500);

            });
        },

    });

    return $.elogic.selectmodal;
});
