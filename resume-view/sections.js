$(document).ready(function() {

	console.log("sections.js loaded");

	$('.resume-section').each(function(){
	    
	    console.log("resume-section EACH");
	    
	    var content = $(this).find('.section-content');
	   	var header = $(this).find('.section-header');

	    header.click(function(){
	    	console.log("works?");
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});