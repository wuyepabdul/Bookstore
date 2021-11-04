import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, bookId, removeBookFromStore }) => (
  <div className="book-container">
    <div key={bookId} className="book-div">
      <div className="book">
        <p className="book-category">{book.category}</p>
        <h1 className="book-title">{book.title}</h1>
      </div>
      <ul className="book-buttons">
        <li>
          <button className="book-btn" type="button">
            Comments
          </button>
        </li>
        <li>
          <button className="book-btn" type="button" onClick={() => removeBookFromStore(bookId)}>
            Remove
          </button>
        </li>
        <li>
          <button className="book-btn" type="button">
            Edit
          </button>
        </li>
      </ul>
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
