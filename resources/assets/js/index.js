/**
 * Created by claudio on 26/06/17.
 */

$( function() {
    var nav = $('#header-menu');

    /**
     * TRANSITION NAVBAR
     */
    $(window).on('scroll',function(){

        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());
        var sectionStop = Math.round( $( '#portfolio' ).offset().top );

        if (stop > (sectionStop - 60 )) {
            nav.addClass('float-menu');
            nav.removeClass('initial-menu');
        } else {
            nav.addClass('initial-menu');
            nav.removeClass('float-menu');
        }

    });
});