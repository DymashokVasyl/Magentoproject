define([
    'jquery',
    'jquery/ui',
    'select',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.select', {
        options: {
            selector:"",
            selectOptions:{ 
                width: 'resolve',
                minimumResultsForSearch: -1
            }
        },
        _create: function () {
            $(this.options.selector).select2(this.options.selectOptions);
        },
    });

    return $.elogic.select;
});