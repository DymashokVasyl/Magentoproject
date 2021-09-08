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
    },

    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        },
    },
};
