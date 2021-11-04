import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBookAction, getBooksAction, removeBookAction } from '../store/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [bookData, setBookData] = useState({
    item_id: uuidv4(),
    title: '',
    category: '',
  });

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

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
    if (bookData.title === '' || bookData.category === '') {
      setError(true);
      setMessage('All fields are required');
    } else {
      const newBook = bookData;
      dispatch(addBookAction(newBook));
      setBookData({
        id: uuidv4(),
        title: '',
        category: '',
      });
      setTimeout(() => { window.location.reload(); }, 500);
      e.target.children[0].firstChild.value = '';
      e.target.children[1].firstChild.value = '';
    }
  };

  const removeBookFromStore = (bookId) => {
    dispatch(removeBookAction(bookId));
    setTimeout(() => { window.location.reload(); }, 500);
  };

  return (
    <div className="container-div">
      {books.books[0]
        ? books.books[0].map((book) => (
          <Book
            key={book}
            book={book[1][0]}
            bookId={book[0]}
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
/*  <Book
            key={book[0]}
            book={book}
            removeBookFromStore={removeBookFromStore}
          /> */
