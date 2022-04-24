import React from 'react';
import { Link } from "react-router-dom";

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt=""></img>
            <div class="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
                <p>No of Pages: {props.pages}</p>
                <div class="text-center">
                <Link to={`/bookdetails/${props.details}`}>
                    <button class="btn navbar-btn send margin-b"><i class="fa fa-info-circle"></i> Details</button>
                </Link>  
                    <button class="btn navbar-btn send margin-b" onClick={() => window.open(props.read)}><i class="fa fa-bookmark"></i> Read</button>
                </div>                
            </div>
        </div>
    );
}
export default BookCard;
