import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBookAction, removeBookAction } from '../store/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [bookData, setBookData] = useState({
    id: uuidv4(),
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
    setError(false);
    setMessage('');
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (bookData.title === '' || bookData.author === '') {
      setError(true);
      setMessage('All fields are required');
    } else {
      const newBook = bookData;
      dispatch(addBookAction(newBook));
      setBookData({
        id: uuidv4(),
        title: '',
        author: '',
      });
      e.target.children[0].firstChild.value = '';
      e.target.children[1].firstChild.value = '';
    }
  };

  const removeBookFromStore = (bookId) => {
    dispatch(removeBookAction(bookId));
  };

  return (
    <div className="container-div">
      {books.length > 0
        ? books.map((book) => (
          <Book
            key={book.id}
            book={book}
            removeBookFromStore={removeBookFromStore}
          />
        ))
        : ''}
      {error && (<p className="error-message">{message}</p>)}
      <Form handleChange={handleChange} submitBookToStore={submitBookToStore} />
    </div>
  );
};

export default Books;
