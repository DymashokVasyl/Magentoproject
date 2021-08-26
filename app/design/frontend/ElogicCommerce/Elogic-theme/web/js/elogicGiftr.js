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
            var self = this; 
            
            self._on('.giftr-link', {
                click: this._clickHandler
            });

        },

        _clickHandler: function (e) {
            e.preventDefault();

            this._initModal();

            this._showModal();
            
        },

        _initModal: function(){
            $(this.element).modal(this.options.modalOptions)


        },

        _showModal: function() {
            $(this.element).modal('openModal');
        },

    });

    return $.elogic.giftr;
});

