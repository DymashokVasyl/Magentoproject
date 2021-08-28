define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'mage/url'
], function($, customerData, url) {
    'use strict';

    var loginUrl = url.build('customer/account/login');
    const mixin = {

        initialize: function () {
            this._super();
            this.initRegistries();
        },

        initRegistries: function() {
            var customerRegistries = customerData.get('gift-registry')();

            this.isLoggedIn(customerRegistries.is_logged_in || false);
            this.registries(customerRegistries.registries || []);
            this.selected(customerRegistries.selected || []);
            this.hasRegistries(this.registries().length > 0);
        },

        getData: function() {
            var data = $('#product_addtocart_form').serializeArray();
            if (_.size(this.selected()) > 0) {
                data.push({name: 'registries', value: _.map(this.selected(), function(value) { return value })});
            }

            return data;
        },

        addProduct: function() {
            if (!$('#product_addtocart_form').valid()) {
                return false;
            }

            $.ajax({
                url: this.url,
                method: 'POST',
                data: this.getData(),
                dataType: 'json',
                showLoader: true,
                success: function (response) {
                    var giftr = $('[data-block="addtogiftr"]');
                    giftr.find('[data-role="dropdownDialog"]').dropdownDialog("close");
                    $('.giftr-dropdown').hide();
                    if (response.status == this.login) {
                        setLocation(response.message);
                    }
                }
            });
        },

        isMessageVisible: function() {
            return !this.hasRegistries() || !this.isLoggedIn();
        },

        showModal:function() {
            $('.giftr-list').modal('openModal'); 
        },

        toRedirect: function () {
            if (!this.isLoggedIn()) {
                window.location.href = loginUrl;
            } else {
                if(this.registries().length == 1){
                    this.addProduct();
                } else {
                    this.showModal();
                }
            }
        },
    }

    return function (target) {
        return target.extend(mixin);

    };

});
