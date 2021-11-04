import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOK_FAIL = 'bookStore/books/ADD_BOOK_FAIL';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const GET_BOOKS_FAIL = 'bookStore/books/GET_BOOKS_FAIL';
const SET_BOOKS_IN_STORE = 'bookStore/books/SET_BOOKS';
const REMOVE_BOOK_FAIL = 'bookStore/books/REMOVE_BOOK_FAIL';

const initialState = [];
const baseUrl = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_API_ID;

export const getBooksAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKS });
    const { data } = await axios.get(`${baseUrl}/${appId}/books`);
    dispatch({ type: SET_BOOKS_IN_STORE, payload: Object.entries(data) });
  } catch (error) {
    dispatch({
      type: GET_BOOKS_FAIL,
      payload: error.message,
    });
  }
};

export const addBookAction = (payload) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/${appId}/books`, payload);
    dispatch({ type: ADD_BOOK });
  } catch (error) {
    dispatch({
      type: ADD_BOOK_FAIL,
      payload: error.message,
    });
  }
};

export const removeBookAction = (payload) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/${appId}/books/${payload}`);
    dispatch({ type: REMOVE_BOOK });
  } catch (error) {
    dispatch({
      type: REMOVE_BOOK_FAIL,
      payload: error.message,
    });
  }
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state;
    case SET_BOOKS_IN_STORE:
      return [...state, action.payload];
    case ADD_BOOK_FAIL:
      return { error: action.payload };
    case GET_BOOKS_FAIL:
      return { error: action.payload };
    case REMOVE_BOOK_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
}
