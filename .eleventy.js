var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
	
	/* Folders allowed through to SITE on build */
	eleventyConfig.addPassthroughCopy("admin");
	eleventyConfig.addPassthroughCopy("posts");
	
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("styles");
	eleventyConfig.addPassthroughCopy("scripts");
	
	
	// Format the Date
	eleventyConfig.addFilter("dateformat", function(dateIn) {
		return moment(dateIn).tz('EST').format('MM.DD.YYYY');
    });
    
    // Get the first `n` elements of a collection. 
	eleventyConfig.addFilter("head", (array, n) => {
		if( n < 0 ) {
			return array.slice(n);
		}
	
		return array.slice(0, n);
	});
	
	// Use only a portion of an array. 
	eleventyConfig.addFilter("portion", (array, f, l) => {
		return array.slice(f, l);
	});

	// Markdown in nunjucks template
	eleventyConfig.addFilter('markdown', function(value) {
	    let markdown = require('markdown-it')({
	        html: true
	    });
	    return markdown.render(value);
	});
	
	return {
		
		dir: {
			input: ".",
			output: "_site",
			includes: "_includes",
			data: "_data"
		}
	};
};