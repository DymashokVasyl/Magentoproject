define([
    'jquery',
    'jquery/ui',
    'domReady!',
], function ($) {
    'use strict';

    $.widget('elogic.dropdown', {
        options: {
            button: '',
            drop: '',
        },

        _create: function () { 
            console.log('Ready');
            $(this.options.button).click(()=>{
                $(this.options.drop).slideToggle();
            });
        },
    });

    return $.elogic.dropdown;
});