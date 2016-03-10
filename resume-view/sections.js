$(function(){

	$.each([ 52, 97 ], function( index, value ) {
		  alert( index + ": " + value );
		});

   	$('.resume-section').each(function(){

	    var content = $(this).find('.section-content');
	   	var header = $(this).find('.section-header');

	    header.click(function(){
	    	console.log("works?");
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});