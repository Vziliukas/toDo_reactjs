import React from 'react';

const Input = () => (
  <div className="container mrg-bot">
    <div className="field">
      <label className="label">To Do</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>
    <div className="field">
      <label className="label">Comment</label>
      <div className="control">
        <textarea className="textarea" placeholder="..."></textarea>
      </div>
    </div>
  </div>
);

export default Input;
