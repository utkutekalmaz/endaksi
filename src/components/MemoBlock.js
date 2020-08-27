import React from 'react';

/**
 *
 * @param {string} name display name
 * @param {string} val value to be stored
 * @param {function} edit callback function for editing
 */
const MemoBlock = ({ name, val, edit }) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = val;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(`— C O P Y —`);
    console.log({ name, val });
  };

  return (
    <div className="memo-block-item">
      <div className="memo-name" onClick={copyToClipboard}>
        {name}
      </div>
      <div className="btn-group">
        <button
          className="edit"
          onClick={() => {
            edit({ name, val });
          }}
        >
          &#9998;
        </button>
        <button className="remove">&#10006;</button>
      </div>
    </div>
  );
};

export default MemoBlock;
