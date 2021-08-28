define([
    'jquery',
    'jquery/ui',
    "Magento_Ui/js/modal/modal",
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.giftr', {

        options: {
            modalOptions: {
                type: 'popup', 
                responsive: true,
                modalClass: 'modal__giftr',
                buttons: [],
            }, 

        },
        _create: function () {
            $(this.element).modal(this.options.modalOptions)
        },
    });

    return $.elogic.giftr;
});

