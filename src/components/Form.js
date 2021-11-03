import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleChange, submitBookToStore }) => (
  <div>
    <h1> Add new Book </h1>
    <form onSubmit={submitBookToStore} className="form-container">
      <div className="form-input">
        <input type="text" name="title" onChange={handleChange} className="input-field" placeholder="Book Title" />
      </div>
      <div className="form-input select-input">
        <input type="text" name="author" onChange={handleChange} className="input-field" placeholder="Book Author" />
      </div>
      <div>
        <button className="delete-button" type="submit">Submit</button>
      </div>
    </form>
  </div>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitBookToStore: PropTypes.func.isRequired,
};

export default Form;
