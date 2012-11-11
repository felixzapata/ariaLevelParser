(function () {
	'use strict';
	function parser(headings) {
		var len = headings.length, i, headingTag, nodeName, aria_level;
		for (i = 0; i < len; i += 1) {
			headingTag = headings[i];
			nodeName = headingTag.nodeName;
			aria_level = nodeName.charAt(1);
			headingTag.setAttribute("role", "heading");
			headingTag.setAttribute("aria-level", aria_level);
		}
	}
	function init() {
		/*global document: false */
		var h1 = document.getElementsByTagName("h1"),
			h2 = document.getElementsByTagName("h2"),
			h3 = document.getElementsByTagName("h3"),
			h4 = document.getElementsByTagName("h4"),
			h5 = document.getElementsByTagName("h5"),
			h6 = document.getElementsByTagName("h6");
		parser(h1);
		parser(h2);
		parser(h3);
		parser(h4);
		parser(h5);
		parser(h6);
	}
	init();
}());


