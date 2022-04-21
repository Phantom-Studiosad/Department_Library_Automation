import React, { Component } from 'react';

const BookCard = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book) => {
                    return <BookCard key={book.id} info={book}/>
                })
            }
        </div>
    );
}
export default BookCard;
