var config = {
    deps: [
        'Magento_Theme/js/theme',
    ],
    
    paths: {
        slick: 'js/plugins/slick',
        'elogicSlider': 'js/elogicSlider',
        'elogicAccordion': 'js/accordion',
    },

    shim: {
        slick: {
            deps: ['jquery'],
        },
    },
};
