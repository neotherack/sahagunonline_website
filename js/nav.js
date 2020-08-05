
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	$(".toggleMenu").css("display", "none");
	$(".nav").show();
	$(".nav li").removeClass("hover");
	$(".nav li a").unbind('click');
	$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		$(this).toggleClass('hover');
	});
}

