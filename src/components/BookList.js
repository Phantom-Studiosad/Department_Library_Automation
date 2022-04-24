import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">  
            {
                props.books.map((book,i) => {
                    return <BookCard
                                key={i} 
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                                pages={book.volumeInfo.pageCount}
                                read={book.volumeInfo.previewLink}
                                details={book.volumeInfo.industryIdentifiers[0].identifier}
                           />
                })
            }
        </div>
    );
}
export default BookList;
