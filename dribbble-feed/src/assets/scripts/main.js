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
	// note: if you update the template file, you must save main.js (to trigger a recompile) to see changes
	const template = require('../../templates/components/feed');

	// template using data; return a string of HTML
	return template(data);

}

// TODO add event handler to button
// TODO make an API call to Dribble
// TODO pass data to template

// @example pass data from API response to Handlebars template
// TODO remove this example
console.log(templateFeed({ items: [] }));
