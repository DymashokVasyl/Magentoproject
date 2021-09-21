var config = {
    deps: [
        'Magento_Theme/js/theme',
    ],
    
    paths: {
        slick: 'js/plugins/slick',
        select: 'js/plugins/select2.full',
        'elogicSlider': 'js/elogicSlider',
        'elogicAccordion': 'js/accordion',
        'elogicSelect': 'js/elogicSelect',
        'elogicGiftr': 'js/elogicGiftr',
        'jQueryUi': 'js/plugins/jquery-ui-11',
    },

    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        },
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'js/itemMixin': true
            }
        }
    }
};
