import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, bookId, removeBookFromStore }) => (
  <div className="book-container">
    <div key={bookId} className="book-div">
      <div className="book">
        <p>{book.category}</p>
        <h1>{book.title}</h1>
      </div>
      <div className="book-buttons">
        <button type="button" onClick={() => removeBookFromStore(bookId)}>
          Remove
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  bookId: PropTypes.string.isRequired,
  removeBookFromStore: PropTypes.func.isRequired,
};

export default Book;
