(function( $ ) {
  $.fn.activeState = function(options) {
  	var settings = $.extend( {
      'selector': 'li',
      'activeClass': 'active',
      'trigger': 'touchstart mousedown',
      'delay': 3000
    }, options);

	this.each(function() {
		$(this).on(settings.trigger, settings.selector, function() {
			$(this).addClass(settings.activeClass,1000);
			var self = this;
			setTimeout(function() {
				$(self).removeClass(settings.activeClass,1000);
			}, settings.delay+1000);
		});
	});
  };
})( jQuery );
