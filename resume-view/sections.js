$(document).ready(function() {

	$("div").css("border", "3px solid red");

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