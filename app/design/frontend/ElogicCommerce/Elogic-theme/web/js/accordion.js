define([
    'jquery',
    'matchMedia',
    'jquery/ui',
    'collapsible',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    $.widget('elogic.accordion', {
        
        options: {
            selector: "",
            collapsibleOptions:{
                active: [0],
                collapsible: true,
                openedState: 'active',
                multiCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration:"300"
                },
            },
        },
    

        _create: function () {
            $(this.options.selector).collapsible(this.options.collapsibleOptions);


            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(this.options.selector).collapsible( "deactivate" );
                }.bind(this),
                exit: function () {
                    $(this.options.selector).collapsible("activate");

                }.bind(this),
            });
        },
    });

    return $.elogic.accordion;
});