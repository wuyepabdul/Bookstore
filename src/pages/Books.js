import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBookAction } from '../store/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    id: uuidv4(),
    title: '',
    category: '',
    author: '',
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = bookData;
    dispatch(addBookAction(newBook));
    setBookData({
      title: '',
      author: '',
    });
    e.target.children[0].firstChild.value = '';
    e.target.children[1].firstChild.value = '';
  };

  const bookList = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzzane Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzzane Collins',
    },
  ];

  return (
    <div className="container-div">
      {bookList.length > 0 ? bookList.map((book) => (<Book key={book.id} book={book} />)) : ''}
      <Form handleChange={handleChange} submitBookToStore={submitBookToStore} />
    </div>
  );
};

export default Books;
