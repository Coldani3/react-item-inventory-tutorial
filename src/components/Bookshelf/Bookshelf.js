import React, {useState} from 'react';
import BookshelfItem from '../BookshelfItem/BookshelfItem';
import './Bookshelf.css';

function Bookshelf() {
	const [items, setItems] = useState([
		{
			title: "Book of Doom", 
			author: "Dark Lord Omega Supreme God Lazor X-Beam",
			type: "Book"
		},
		{
			title: "The Hitchhiker's Guide to the Galaxy",
			author: "Douglas Adams",
			type: "Book"
		},
		{
			title: "Back to the Future",
			author: "Uuuuuh the back to the future people?",
			type: "Movie"
		},
		{
			title: "Ayuh uh yeah *nonsensical gibberish about getting female dogs*: The Track: The Experience",
			author: "Lil 5 Day Old Half Eaten Cheese Burger",
			type: "CD"
		}
	]);

	return (
		<div className="outer-border">
			{
				items.map((value, i) => 
					<BookshelfItem key={i} title={value.title} author={value.author} type={value.type}/>
				)
			}
		</div>
	);
}

export default Bookshelf;