$(document).ready(function() {

	$('.resume-section').each(function(){
	    
	    var content = $(this).find('.section-content');
	   
	    $(this).find('.section-header').click(function(){
	    	alert('clicked');
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});