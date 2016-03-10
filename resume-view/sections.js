$(function(){

	$('div').each(function (index, value){
	  console.log($(this).attr('href'));
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