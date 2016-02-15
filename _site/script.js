$(document).ready(function(){
	paintBG();
	displayLinks();
});

function paintBG() {
	var bgcolorlist=new Array("#D3EBE6", "#DAD3EB", "#EBD3D8", "#F8FFE6", "#E6FAFF","#F8E6FF", "#FFECE6");

	var thecolor = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)];
	document.body.style.background = thecolor;
}

function displayLinks() {
	// ["display text","URL"]
	var urls = new Array(
		["KRM Pledges", "http://bit.ly/KRM"],
		["@WRFLbot","http://www.twitter.com/WRFLbot"],
		["github.com/c-ro","https://github.com/c-ro"],
		["GOP Whackamole","http://c-ro.github.io/whackamole/index.html"],
		["PoS Paint", "http://c-ro.github.io/PoS Paint/index.html"], ["carltography.tumblr.com","http://carltography.tumblr.com"]);

	for (i = 0; i < urls.length; i++){
	    var a = $('<a>');
	    var linktext = urls[i][0];
	    a.attr("href", urls[i][1]);
	    a.html(linktext);
	    $(a).appendTo('#main');
	};
}




