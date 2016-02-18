/**
 * Dynamit Code Day Dribbble Feed
 * @author ?
 */

// button to hook click event into
const button = document.querySelector('#load-shots');

/**
 * Return a templated feed
 * @param {object} data Context for template
 * @return {string} Templated HTML
 */
function templateFeed(data = {}) {

	// import Handlebars template
	const template = require('../../templates/components/feed');

	// template using data; return a string of HTML
	return template(data);

};

console.log(templateFeed());
