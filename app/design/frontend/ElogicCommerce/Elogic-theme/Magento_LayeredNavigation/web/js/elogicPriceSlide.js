define([
    'jquery',
    'jQueryUi',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.priceSlider', {

        options: {
            sliderElement: '',
            textElement: '',
            ajaxUrl: '',
            minPrice: '',
            maxPrice: '',
            selectedFrom: '',
            selectedTo: '',
        },
        _create: function () {
            var self = this;

            $(this.options.sliderElement).slider({
                range: true,
                min: this.options.minPrice,
                max: this.options.maxPrice,
                step: 1,
                values: [this.options.minPrice, this.options.maxPrice],

                slide: function (event, ui) {
                    self.setText(ui.values[0], ui.values[1]);
                },
                change: function (event, ui) {
                    // console.log(self.getUrl(self.options.ajaxUrl));


                    self.windowRedirect(self.getUrl(self.options.ajaxUrl),ui.values[0],ui.values[1]);
                }
            })
        },

        getUrl: function (url) {
            return url.replace(/price=[0-9]{1,10}[-][0-9]{1,10}/gm, "price=%7Bprice_start%7D-%7Bprice_end%7D");
        },

        setText: function (from, to) {
           return $(this.options.textElement).html(`
                <span class="from_fixed">$ ${from}</span>
                <span class="space_fixed">-</span>
                <span class="to_fixed">$ ${to}</span>
            `);
        },

        windowRedirect: function (url,from, to){
            window.location.href = url.replace(encodeURI('{price_start}'), from).replace(encodeURI('{price_end}'), to);

        },

        ajaxSubmit: function () {

            // $.ajax({
            //     url: submitUrl,
            //     data: {
            //         // isAjax: 1,
            //     },
            //     type: 'POST',
            //     // dataType: 'json',
            //     beforeSend: function (data) {
            //         // $('.lof_overlay').show();
            //         if (typeof window.history.pushState === 'function') {
            //             window.history.pushState({
            //                 url: submitUrl
            //             }, '', submitUrl);
            //         }
            //         console.log('befor')
            //         console.log(data)
            //     },
            //     success: function (res) {
            //         if (res.backUrl) {
            //             window.location = res.backUrl;
            //             return;
            //         }
            //         // if (res.navigation) {
            //         //     $('#layered-filter-block').replaceWith(res.navigation);
            //         //     $('#layered-filter-block').trigger('navigationUpdated');
            //         // }
            //         // if (res.products) {
            //         //     $(".products.wrapper").replaceWith(res.products);
            //         //     $(".products.wrapper").trigger('contentUpdated');
            //         // }
            //         console.log(this.Scopes[3])

            //         // $(".products.wrapper").html(res);
            //         // $('.lof_overlay').hide();

            //         console.log('success');

            //     },
            //     error: function () {
            //         console.log(this)
            //         console.log('error')

            //         // window.location.reload();
            //     }
            // });
        }
    });

    return $.elogic.priceSlider;
});
