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
            collapsibleOptions:{
                animate: {
                    easing: "easeOutCubic",
                    duration:"300"
                },


            },
        },
    


        _create: function () {
            var self = this,
                options = this.options,
                el = $(this.element);

                
            // el.collapsible(options.collapsibleOptions);
            el.each(function() {
                $(this).collapsible();

            });


            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {

                    el.each(function() {
                        $(this).collapsible("deactivate");

                    });
                },
                exit: function () {
                    
                    el.each(function() {
                        // $(this).collapsible(options.collapsibleOptions);

                        $(this).collapsible("activate");
                    });

                },
            });
        },
    });

    return $.elogic.accordion;
});