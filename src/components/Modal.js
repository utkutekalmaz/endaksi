import React from 'react';

const Modal = ({ isOpen, predefined }) => {
  return (
    <div className={'modal-background ' + (isOpen ? 'on' : '')}>
      <div className="modal-container">
        <form action="">
          <input
            type="text"
            placeholder="memory name"
            value={predefined.name ? predefined.name : ''}
            className="key-input"
          />
          <textarea
            type="text"
            value={predefined.val ? predefined.val : ''}
            placeholder="memory block"
            className="val-input"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
