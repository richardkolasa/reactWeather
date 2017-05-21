import React from 'react';

const SingleSubmission = (props) => (
  <form onSubmit={props.onSubmit} className="input-group">
    <input
      placeholder={props.placeholder}
      className={props.inputClass}
      value={props.value}
      onChange={props.onChange} />
    <span className={props.spanClass}>
      <button type={props.buttonType} className={props.buttonClass}>
        Submit
      </button>
    </span>
  </form>
);

export default SingleSubmission;
