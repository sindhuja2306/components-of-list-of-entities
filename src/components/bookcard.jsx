// write the book component code here
import React from "react";

const BookCard = ({book})=>{
    return(
        <div>
            <img src={book.image}/>
            <h2>{book.name}</h2>
            <p>Genere:{book.genere}</p>
            <p>Author: {book.author}</p>
        </div>
    );
};

export default BookCard;
