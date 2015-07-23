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
	var urls = new Array("https://www.twitter.com/gnirtsmodnar", "https://github.com/c-ro", "http://carltography.tumblr.com","http://c-ro.github.io/whackamole.index.html");

	for (i = 0; i < urls.length; i++){
	    var a = $('<a>');
	    var linktext = urls[i].replace(/https:\/\/|http:\/\/|/,'');
	    linktext = linktext.replace(/www.twitter.com\//,'@');
	    a.attr("href", urls[i]);
	    a.html(linktext);
	    $(a).appendTo('#main');
	};
}




