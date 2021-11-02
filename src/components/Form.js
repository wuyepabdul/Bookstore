import React from 'react';

const Form = () => (
  <div>
    <h1> Add new Book </h1>
    <form className="form-container">
      <div className="form-input">
        <input type="text" name="book" className="input-field" value="book" placeholder="Book Title" />
      </div>
      <div className="form-input select-input">
        <input type="text" name="author" className="input-field" value="book" placeholder="Book Author" />
      </div>
    </form>
  </div>
);

export default Form;
