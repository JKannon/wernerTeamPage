$(document).ready(function() {
	
	
	$('ul#nav li').hover(
		function() {
			$(this).find('.mdd').css('display', 'block')
		}, function() {
			$(this).find('.mdd').css('display', 'none')
		}
	);
	
	$('ul#nav li .mdd').hover(
		function() {
			$(this).siblings().addClass('nav_hover')
		}, function() {
			$(this).siblings().removeClass('nav_hover')
		}
	);
	
	
	if ( $('#content h2').text().length > 20 ) { 
		if ( $('#content h2').text().length > 40 ) {
			$('#content h2').addClass('super_shrink');
		} else {	
			$('#content h2').addClass('shrink');
		} 
	}

	if ( $('#content h1').text().length > 20 ) { 
		if ( $('#content h1').text().length > 40 ) {
			$('#content h1').addClass('super_shrink');
		} else {	
			$('#content h1').addClass('shrink');
		} 
	}
	
	if ( document.body.id !== "" ){
		var body_classes = $('body').attr('class').split(/\s+/);
		var section = $('body').attr('id').split(/\s+/);
		$.each(body_classes,function(index,classname) {
			// console.log (body_classes);
			if (body_classes[0] == "index" && body_classes[1] == "secondary_landing") {
				$('#sidenav li.' + section).addClass('active');
			} else {
				$('#sidenav li.' + classname).addClass('active');
			}
		});
	}
	
	// $('#sitemap ul div.col-md-6').each( function(){
	// 	$(this).removeClass('col-md-6');
	// });
	
	// $('#sitemap ul span.fourth').each(function(){
	// 	$(this).addClass('col-md-3 col-sm-6 col-xs-12');
	// });
	
	// $('#sitemap ul span.half').addClass('col-md-6 col-xs-12');

	// $('#sitemap ul span.split').each(function(){
	// 	$(this).addClass('col-sm-6 col-xs-12');
	// });
		
	/*
	$("a.popout[rel]").overlay({
		expose: '#000', 
		closeOnClick: false, 
		onBeforeLoad: function() {

			// grab wrapper element inside content
			var wrap = this.getOverlay().find(".contentWrap");

			// load the page specified in the trigger
			wrap.load(this.getTrigger().attr("href"));
		}
	});
	*/
});
