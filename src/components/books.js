import React, { Component } from 'react';
import SearchArea from './searcharea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
        }
    }

    searchBooks = (e) => {
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes").query({ q: this.state.searchField }).then((data) => {
            this.setState({
                books: [...data.body.items]
            })
        })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBooks={this.searchBooks} handleSearch={this.handleSearch}/>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}
export default Books;
