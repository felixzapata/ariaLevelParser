var parserLevelHeadings = function () {

	function _parser(headings) {
		var len = headings.length,
			i = 0;
		for(; i < len; i++){
			var headingTag = headings[i],
				nodeName = headingTag.nodeName;
				aria_level = nodeName.charAt(1);
			headingTag.setAttribute("role", "heading");
			headingTag.setAttribute("aria-level", aria_level);
		}
	}

	function init () {
		var h1 = document.getElementsByTagName("h1"),
			h2 = document.getElementsByTagName("h2"),
			h3 = document.getElementsByTagName("h3"),
			h4 = document.getElementsByTagName("h4"),
			h5 = document.getElementsByTagName("h5"),
			h6 = document.getElementsByTagName("h6");
			_parser(h1);
			_parser(h2);
			_parser(h3);
			_parser(h4);
			_parser(h5);
			_parser(h6);
	}

	return {
		init : init
	};

}();

jQuery(document).ready(function() {
	parserLevelHeadings.init();
});
