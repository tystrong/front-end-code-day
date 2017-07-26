/**
 * Feed template.
 * Uses template literals to inject data into a string of HTML.
 */

// TODO add user names to item template

/**
 * Render an individual item
 * @param  {object} item
 * @return {string}
 */
function renderItem(item) {
	return `
		<div class="feed__item">
			<a href="${item.html_url}" class="feed__image">
				<img src="${item.images.normal}" alt="" title="">
			</a>
			<div class="feed__item-details">
				<div class="feed__item-user">Some User</div>
				<div class="feed__item-likes">&#9825; 100</div>
			</div>
		</div>
	`;
}


/**
 * Template the feed with children items
 * @param  {array} items
 * @return {string}
 */
export default function (items) {
	return `
		<div class="feed">
			${items.map((item) => {
				return renderItem(item);
			})}
		</div>
	`;
}
