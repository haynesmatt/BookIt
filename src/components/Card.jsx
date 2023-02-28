import './Card.css';
import React from "react";

const Card = (book) => {

    return (
        <div className="Card">
            <p className="image">{book.image}</p>
            <p className="name">{book.name}</p>
            <p className="author">{book.author}</p>
            <button className="website">{book.website}</button>
        </div>

    )

}

export default Card;