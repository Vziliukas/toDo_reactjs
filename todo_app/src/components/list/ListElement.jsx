import React from 'react';

const ListElement = (props) => (
  <div className="box mrg-bot">
    <div className="content">
      <div className="columns">
        <div className="column is-three-quarters">
          <p className="title">{ props.title ? props.title : "Title" }</p>
        </div>
      </div>
      <hr />
      <p className="subtitle">Coment:</p>
      <p>{ props.text ? props.text : 'no comment'}</p>
      <div className="columns">
        <div className='column'>
            <span className="button mrg-r">Update</span>
            <span className="button">Remove</span>
        </div>
      </div>
    </div>
  </div>
);

export default ListElement;
