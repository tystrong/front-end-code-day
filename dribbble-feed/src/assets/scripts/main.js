/**
 * Dynamit Code Day Dribbble Feed
 * @author ?
 */

// Dribbble API info
const API_ENDPOINT = 'https://api.dribbble.com/v1/shots/';
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
 * Return a templated feed
 * @param {object} data Context for template
 * @return {string} Templated HTML
 */
function templateFeed(data = {}) {

	// import Handlebars template
	const template = require('../../templates/components/feed');

	// template using data; return a string of HTML
	return template(data);

}

console.log(templateFeed());
