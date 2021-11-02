import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';

const Books = () => {
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
  return <div><Book bookList={bookList} /></div>;
};

export default Books;
