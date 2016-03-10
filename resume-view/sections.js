$(document).ready(function() {

	$('.section').each(function(){
	    
	    var content = $(this).find('.section-content');
	   
	    $(this).find('.section-header').click(function(){
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});