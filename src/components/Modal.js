import React from 'react';

const Modal = ({ isOpen, predefined }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <form action="">
          <input type="text" className="key-input" />
          <textarea type="text" className="val-input" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
