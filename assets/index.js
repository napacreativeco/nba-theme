(function($) {

    $(document).ready(function() {
        console.log('ready');
    });

    $('.search-link').on('click', function() {
        if ($('.search-modal').attr('data-state') == 'closed') {
            $('.search-link').addClass('active');
            $('.search-modal').css('top', '0px').attr('data-state', 'open');
        } else {
            $('.search-link').removeClass('active');
            $('.search-modal').css('top', '-100%').attr('data-state', 'closed');
        }
        
    });

})(jQuery);