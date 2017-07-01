"use strict";

module.exports = function(source) {
	var html = source,
		exports = 'module.exports = ';

		html = html.replace(/\r|\n/g, '');
		html = html.replace(/("|')/g, '\\$1');
		html = html.replace(/\s+/gm,' ');

	return exports + '"' + html + '"';
};

