/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const Book = ({ bookList }) => (
  <ul>
    {bookList.length > 0 ? (bookList.map((book) => (
      <li key={book.id}>
        <p>{book.category}</p>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
      </li>
    ))) : <li>No books</li>}
  </ul>
);

/* Book.propTypes = {
  bookList: PropTypes.array.isRequired,
}; */

export default Book;
