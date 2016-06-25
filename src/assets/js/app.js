
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



 //search
//-------

 $('#course-finder').keyup(function(){
            var searchField = $('#course-finder').val();
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
            $.getJSON('data.json', function(data) {
              $.each(data, function(key, val){
                if ((val.name.search(regex) != -1) || (val.location.search(regex) != -1)) {
                  output += '<div class="medium-6 columns">';
                  output += '<div class="medium-6 columns"><img class="img-responsive" src="'+val.avatar+'" alt="'+ val.name +'" /></div>';
                  output += '<div class="medium-7 columns">';
                  output += '<h5>' + val.name + '</h5>';
                  output += '<p>' + val.location + '</p>';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 === 0){
                    output += '</div><div class="row">';
                  }
                  count++;
                }
              });
              output += '</div>';
              $('#results').html(output);
            });
        });
