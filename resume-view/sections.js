$(function(){

   	$('.resume-section').each(function(index, value){

   		console.log($(this));

	    var content = $(this).find('.section-content');
	   	var header = $(this).find('.section-header');

	    header.click(function(){
	    	console.log("works?");
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});

});