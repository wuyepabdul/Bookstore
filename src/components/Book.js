/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const Book = ({ bookList }) => (
  <div className="book-container">
    {bookList.length > 0 ? (bookList.map((book) => (
      <div key={book.id} className="book-div">
        <div key={book.id} className="book">
          <p>{book.category}</p>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
        </div>
        <div className="book-buttons">
          <button type="button">
            Remove
          </button>
        </div>
      </div>
    ))) : <li>No books</li>}
  </div>
);

/* Book.propTypes = {
  bookList: PropTypes.array.isRequired,
}; */

export default Book;
