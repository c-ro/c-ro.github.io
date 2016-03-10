$(document).ready(function() {

	$('.resume-section').each(function(){
	    
	    var content = $(this).find('.section-content');
	   	var header = $(this).find('.section-header');

	    header.click(function(){
	    	alert('clicked');
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});