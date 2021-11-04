import React, {useState} from 'react';
import BookshelfItem from '../BookshelfItem/BookshelfItem';
import './Bookshelf.css';

function Bookshelf() {
	const [items, setItems] = useState([
		{
			title: "Book of Doom", 
			author: "Dark Lord Omega Supreme God Lazor X-Beam"
		}
	]);

	return (
		<div className="outer-border">
			{
				items.map((value, i) => 
					<BookshelfItem key={i} title={value.title} author={value.author}/>
				)
			}
		</div>
	);
}

export default Bookshelf;