import React from 'react';

import './BookshelfItem.css';

const ColorsForType = {
	"Book": "blue",
	"Movie": "red",
	"CD": "pink"
}

function BookshelfItem({title, author, type, ...props}) {
	return (
		<div className={"item-box " + ColorsForType[type]}>
			<div className="title"><b>Title</b>: {title}</div>
			<div className="author"><b>{type !== "Movie" ? "Author" : "Director"}</b>: {author}</div>
			<div className="type"><b>Type</b>: {type}</div>
		</div>
	);
}

BookshelfItem.defaultProps = {
	title: "Title",
	author: "Author",
	type: "Book"
}

export default BookshelfItem;