define([
    'jquery',
    'matchMedia',
    'jquery/ui',
    'accordion',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    $.widget('elogic.accordion', {
        options: {
            template:"",
            acordionOptions:{
                openedState: "open"
            },
        },


        _create: function () { 
            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {},
                exit: function () {
                    console.log(this.options.template);

                    $(this.options.template).accordion(this.options.acordionOptions);
                }.bind(this),
            });
        },
    });

    return $.elogic.accordion;
});