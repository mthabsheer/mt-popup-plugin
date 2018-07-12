(function( $ ) {
 
    $.fn.showLinkLocation = function( options ) {
    	var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            class: "white",
            content: '',
            header: 'Modal Header',
            /*footer: 'Modal Footer'*/
        }, options );
 
        this.filter( ".modal-popup" ).each(function() {
            var link = $( this );
            link.css( "color", settings.color ).addClass( settings.class );
        });
        this.click(function(){
        	var link = $( this );
        	var content = link.attr("data-title");
        	//alert(content);
        	/*var div = '<div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2>' + settings.header + '</h2></div><div class="modal-body"><p>' + content + '</p></div><div class="modal-footer"><h3>' + settings.footer + '</h3></div></div>';*/
        	var div = '<div id="popup1" class="mt-modal-content overlay"><div tabindex="-1" class="mt-popup"><h2>' + settings.header + '</h2><a class="close" href="javascript:void(0);">&times;</a><div class="content">' + content + '</div></div></div>'
        	$(div).appendTo('body');
        	//close events
        	/*$('.close').each(function(){
        		$(this).on('click', function(){
	        		$('.modal-content').fadeOut('slow', function(){$( this ).remove()});
	        	});
        	});*/

			$('.close').on('click', function(){
        		$('.mt-modal-content').fadeOut('slow', function(){$( this ).remove()});
        	});
        	$('.mt-popup').on('blur', function(){
        		$('.mt-modal-content').fadeOut('slow', function(){$( this ).remove()});
        	});
        	//$('.popup').focus();
        	
        });
 
        return this;
 
    };
 
}( jQuery ));