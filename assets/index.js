(function($) {

    $(document).ready(function() {
        //console.log('ready');
    });

    /* 
    Search
    */
    $('.search-link').on('click', function() {
        if ($('.search-modal').attr('data-state') == 'closed') {
            $('.search-link').addClass('active');
            $('.search-modal').css('top', '0px').attr('data-state', 'open');
        } else {
            $('.search-link').removeClass('active');
            $('.search-modal').css('top', '-100%').attr('data-state', 'closed');
        }
    });


    /*
    Type Overlay
    */
    $('.filter-link.type').on('click', function() {
        //$('.type-overlay').toggleClass('active');

        if ( $('.type-overlay').css('display') == 'block' ) {
            gsap.to('.type-overlay', {
                display: 'none',
                top: '80px',
                opacity: 0,
                duration: 0.3
            });
        } else {
            gsap.to('.type-overlay', {
                display: 'block',
                top: '20px',
                opacity: 1,
                duration: 0.3
            });
        }

    });

    /* Type Filter: URL */
    $('.type-item').on('click', function() {
        var search = document.location.search;
        var params = new URL(document.location).searchParams;
        var type = params.get("filter.p.product_type");

        if (search.length > 0) {
            if (type) {
                window.location = window.location.pathname + '?filter.p.product_type=' + $(this).find('input[type="checkbox"]').attr('value');
            } else {
                window.location = window.location + '&filter.p.product_type=' + $(this).find('input[type="checkbox"]').attr('value');
            }
            
        } else {
            window.location = window.location.pathname + '?filter.p.product_type=' + $(this).find('input[type="checkbox"]').attr('value');
        }
    });

    /*
    Color Overlay
    */
    $('.filter-link.color').on('click', function() {
        if ( $('.color-overlay').css('display') == 'block' ) {
            gsap.to('.color-overlay', {
                display: 'none',
                top: '80px',
                opacity: 0,
                duration: 0.3
            });
        } else {
            gsap.to('.color-overlay', {
                display: 'block',
                top: '20px',
                opacity: 1,
                duration: 0.3
            });
        }
    });

    /* Color Filter: URL */
    $('.color-item').on('click', function() {
        var search = document.location.search;
        var params = new URL(document.location).searchParams;
        var color = params.get("filter.v.option.color");

        console.log(color);

        if (search.length > 0) {
            if (color) {
                window.location = window.location.pathname + '?filter.v.option.color=' + $(this).find('input[type="checkbox"]').attr('value');
            } else {
                window.location = window.location + '&filter.v.option.color=' + $(this).find('input[type="checkbox"]').attr('value');
            }
        } else {
            window.location = window.location.pathname + '?filter.v.option.color=' + $(this).find('input[type="checkbox"]').attr('value');
        }
    });

    /*
    Sorting Overlay
    */
    $('.sorting-link').on('click', function() {

        if ( $('.sorting-overlay').css('display') == 'block' ) {
            gsap.to('.sorting-overlay', {
                display: 'none',
                top: '80px',
                opacity: 0,
                duration: 0.3
            });
        } else {
            gsap.to('.sorting-overlay', {
                display: 'block',
                top: '20px',
                opacity: 1,
                duration: 0.3
            });
        }

    });

    var search = document.location.search;
    var params = new URL(document.location).searchParams;
    var sort = params.get("sort_by");
    console.log(sort);

    /* Sort Filter: URL */
    $('.sort-item').on('click', function() {
        var search = document.location.search;
        var params = new URL(document.location).searchParams;
        var sort = params.get("sort_by");

        if (sort > 0) {
            window.location = window.location + '&sort_by=' + $(this).find('input[type="checkbox"]').attr('value');
        } else {
            window.location = window.location.pathname + '?sort_by=' + $(this).find('input[type="checkbox"]').attr('value');
        }
        
    });

    /*
    Filter States
    */
    $(document).ready(function() {
        var search = document.location.search;
        var params = new URL(document.location).searchParams;
        var color = params.get("filter.v.option.color");
        var type = params.get("filter.p.product_type");

        // Add Active to Colors
        $('.color-box').each(function(i) {
            //console.log( $(this).attr('value') );
            if ( $(this).attr('value') == color) {
                $(this).attr('checked', true);
            }
        });

        // Add Active to Type
        $('.type-box').each(function(i) {
            //console.log( $(this).attr('value') );
            if ( $(this).attr('value') == type) {
                $(this).attr('checked', true);
            }
        });
    });

    /*
    Cart Drawer
    */
    $('.close-drawer').on('click', function() {
        $('body').removeClass('js-my-cart-open');
    });

})(jQuery);