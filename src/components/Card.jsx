import './Card.css';
import React from "react";

const Card = (book) => {

    return (
        <div className="Card">
            <img className="image"
                src={book.image}
                alt={book.name}
            />
            <h3 className="name">{book.name}</h3>
            <h4 className="author">{book.author}</h4>
            <button className="website">{book.website}</button>
        </div>

    )

}

export default Card;