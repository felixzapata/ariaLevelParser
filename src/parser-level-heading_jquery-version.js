(function () {
	'use strict';
	function parser(headings) {
		headings.each(function(){
			var $that = $(this),
				$nodeName = $that.get(0).nodeName,
				$aria_level = $nodeName.charAt(1);
			$that.attr("role", "heading");
			$that.attr("aria-level", $aria_level);
		});
	}
	function init () {
		var $h1 = $("h1"),
			$h2 = $("h2"),
			$h3 = $("h3"),
			$h4 = $("h4"),
			$h5 = $("h5"),
			$h6 = $("h6");
			parser($h1);
			parser($h2);
			parser($h3);
			parser($h4);
			parser($h5);
			parser($h6);
	}
	init();
})(jQuery);
