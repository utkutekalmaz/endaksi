import React from 'react';

const AddButton = (props) => {
  return (
    <button onClick={props.openModal} class="add-btn ripple">
      <span>A D</span>
      <br />
      <span>+ D</span>
    </button>
  );
};

export default AddButton;
