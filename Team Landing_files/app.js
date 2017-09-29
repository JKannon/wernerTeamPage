
$(function () {
	//
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});

});


var equalizeColumns;

$(window).on('load resize', function() {
	return equalizeColumns();
});

equalizeColumns = function() {

	return $('.row.equalize').each(function() {
	  var $row, collapsed, tallest;
	  $row = $(this);
	  tallest = 0;
	  collapsed = false;
	  $row.children('*').each(function(i) {
	    var $this;
	    $this = $(this).children('.equal');
	    $this.css('minHeight', '1px');
	    collapsed = $this.outerWidth() === $row.outerWidth();
	    if (!collapsed) {
	      // if (!$this.hasClass('equal')) {
	      //   $this.addClass('equal');
	      // }
	      if ($this.outerHeight() > tallest) {
	        tallest = $this.outerHeight();
	      }
	    }
	  });
	  if (!collapsed) {
	    return $row.children('*').children('.equal').css('min-height', tallest);
	  }
	});
	
};
