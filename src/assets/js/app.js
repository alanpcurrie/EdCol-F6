
//Go for foundation!
//-----------------
$(document).foundation();

//this gives dropdowns accesability without a mouse//
//----------------------------------------------------------
( function( $ ) {
	// Drastically modified from the function in the WordPress Twenty Fifteen theme
	// Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js

	$( '.dropdown-toggle' ).click( function( e ) {
		var _this = $( this );
		e.preventDefault();
		_this.toggleClass( 'toggle-on' );
		_this.parent().next( '.sub-menu' ).toggleClass( 'toggled-on' );
		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		_this.html( _this.html() === '<span class="screen-reader-text">Expand child menu</span>' ? '<span class="screen-reader-text">Collapse child menu</span>' : '<span class="screen-reader-text">Expand child menu</span>' );
	} );

})( jQuery );



//waves.js for material effects
//----------------------------

Waves.init();
    Waves.attach('.waves', ['waves-button', 'waves-float']);

//headroom

//slide up top bar foundation

var didScroll;
var lastScrollTop = 0;
var scrollAmount = 10; // Value of scroll amount
var navbarHeight = $('.slideUp').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var sup = $(this).scrollTop();

    if (sup > lastScrollTop && sup > navbarHeight) {
        // On Scroll Down
        $('.slideUp').css({
            top: -$(this).outerHeight()
        });
    } else {
        // On Scroll Up
        if (sup + $(window).height() < $(document).height()) {
            $('.slideUp').css({
                top: 0
            });
        }
    }

    lastScrollTop = sup;
}