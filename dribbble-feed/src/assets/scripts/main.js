/**
 * Dynamit Code Day Dribbble Feed
 * @author ?
 */
import feedTemplate from './templates/feed';

// Dribbble API endpoint
const API_ENDPOINT = 'https://api.dribbble.com/v1/shots/';

// TODO API token provided in-person
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
 * The `feed` module is function that returns a template literal.
 * @param  {array}  data Context for template
 * @return {string} Templated HTML
 */
function buildFeed(data) {
	// template using data; return a string of HTML
	return feedTemplate(data);
}


// TODO add event handler to button
// TODO make an API call to Dribble
// TODO pass data to template


// @example pass data from API response to Handlebars template
// TODO remove this example
console.log(buildFeed([]));

