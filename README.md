ariaLevelParser
===============

A JavaScript parser to add the correct "aria-level" in all headings tags of my page to prevent the bug with JAWS 12 and 13 in Internet Explorer. Based on ["JAWS, IE and Headings in HTML5"](http://www.accessibleculture.org/articles/2011/10/jaws-ie-and-headings-in-html5/).

This parser modify the code from [HTML5 outliner from Google Code](http://code.google.com/p/h5o/) to add a method that insert a value for the attribute "aria-level". This value is calculated from the tree of the outliner.

You can obtaine the same result of the HTML5 outliner if you use the [HeadingsMap addon for Firefox](https://addons.mozilla.org/es/firefox/addon/headingsmap/?src=search).

For more information about the HTML5 algorithm please visit, [Sections and Outlines of an HTML5 Document
](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).

Tests pages
-----------
There are several HTML tests pages with differents examples of sections, nav, headings, etc... Each test contains the HTML and the result output by the HTML5 outliner.

TODO
-----
Refactor the code of the HTML5 outliner.

Issues
------
Please, feel free to report any issue you experiment via Github.

Author
------
[Félix Zapata](http://www.linkedin.com/in/felixzapata)
