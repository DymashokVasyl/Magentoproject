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

            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(this.options.selector).collapsible( "disable" );
                    $(this.options.selector).collapsible( "destroy" );

                }.bind(this),
                exit: function () {
                        console.log(`Collapsible init - ${this.options.selector}`);
                        $(this.options.selector).collapsible(this.options.collapsibleOptions);


                }.bind(this),
            });
        },
    });

    return $.elogic.accordion;
});