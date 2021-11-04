import React from 'react';

import './BookshelfItem.css';

function BookshelfItem({title, author, ...props}) {
	return (
		<div className="item-box">
			<div className="title">{title}</div>
			<div className="author">{author}</div>
		</div>
	);
}

BookshelfItem.defaultProps = {
	title: "Title",
	author: "Author"
}

export default BookshelfItem;