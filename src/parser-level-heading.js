var parserLevelHeadings = function () {

	function _parser(headings) {
		headings.each(function(){
			var $that = $(this),
				$nodeName = $that.get(0).nodeName;
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
			_parser($h1);
			_parser($h2);
			_parser($h3);
			_parser($h4);
			_parser($h5);
			_parser($h6);
	}

	return {
		init : init
	};

}();

jQuery(document).ready(function() {
	parserLevelHeadings.init();
});
