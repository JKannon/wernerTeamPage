jQuery(document).ready( function($) {
	$('#carousel').carouFredSel({
		// responsive
		// width	: 950,
		// auto	: {
		// 	items 			: 1,
		// 	duration		: 1500,
		// 	easing			: "linear",
		// 	timeoutDuration	: 0
		// }
		responsive: true,
		items: {
			width: 300,
			height: '66%',
			visible: {
				min: 1,
				max: 5
			}
		},
		scroll: 1,
		padding: 0,
		auto	: {
			items 			: 1,
			duration		: 1500,
			easing			: "linear",
			timeoutDuration	: 0
		}
	}).trigger("pause");

	$("#carousel_prev").hover(function() {
		$("#carousel").trigger("configuration", ["direction", "right"]);
		$("#carousel").trigger("play");
	}, function() {
		$("#carousel").trigger("pause");
	}).click(function() {
		return false;
	});

	$("#carousel_next").hover(function() {
		$("#carousel").trigger("configuration", ["direction", "left"]);
		$("#carousel").trigger("play");
	}, function() {
		$("#carousel").trigger("pause");
	}).click(function() {
		return false;
	});
	
	var thisHash = window.location.hash;
	if(window.location.hash) {
		$(thisHash).fancybox().trigger('click');
		$('html, body').animate({
	        scrollTop: ($("#drive-werner-videos").offset().top / 2) 
	    }, 300);
	}
	$("a.video").click( function() {
		$('html, body').animate({
	        scrollTop: ($("#drive-werner-videos").offset().top / 2) 
	    }, 300);
	});
	
	$("a.video").fancybox({
		'scrolling' 		: 'no',	
		'centerOnScroll' 	: true
	});

	$("#state-jobs a").fancybox({
		'autoDimensions' : 'false',
		'width'          : 600,
		'height'         : 588
	});
	
});
