import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleChange, submitBookToStore }) => (
  <div className="form">
    <h1 className="add-book-heading"> Add new Book </h1>
    <form onSubmit={submitBookToStore} className="form-container">
      <div className="form-input">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="input-field"
          placeholder="Book Title"
        />
      </div>
      <div className="form-input select-input">
        <input
          type="text"
          name="category"
          onChange={handleChange}
          className="input-field"
          placeholder="Category"
        />
      </div>
      <div>
        <button className="submit-button" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  </div>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitBookToStore: PropTypes.func.isRequired,
};

export default Form;
