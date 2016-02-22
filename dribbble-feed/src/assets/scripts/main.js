/**
 * Dynamit Code Day Dribbble Feed
 * @author ?
 */

// Dribbble API info
const API_ENDPOINT = 'https://api.dribbble.com/v1/shots/';

// API token provided in-person
const API_TOKEN = '';

// DOM nodes
const DOM = {

	// main container
	mainContainer: document.querySelector('[role="main"]'),

	// button to hook click event into
	button: document.querySelector('#load-shots'),

	// container for the templated HTML
	feedContainer: document.querySelector('#dribbble-feed')

};


/**
 * Return a templated feed.
 * Handlebars is already included (via webpack handlebars-loader); just pass data through.
 * @param {object} data Context for template
 * @return {string} Templated HTML
 */
function templateFeed(data) {

	// import the template
	// note: if you update the template, you must recompile (hit save on main.js) to see changes
	const template = require('../../templates/components/feed');

	// template using data; return a string of HTML
	return template(data);

}

// @example pass data from API response to Handlebars template
console.log(templateFeed({}));
